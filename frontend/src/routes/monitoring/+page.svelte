<script lang="ts">
    import "tailwindcss/tailwind.css";
    import { writable, get } from 'svelte/store';
    import axios from 'axios';

    let goals = writable<{ id: number; goal: string; evaluation: string; achieved: string | null }[]>([]);

    // Define the backend URL
    const backendUrl = 'http://localhost:3000/evaluate-goal';

    // Function to evaluate a single goal
    async function evaluateGoal(id: number, goal: string, evaluation: string) {
        try {
            // Make a POST request to the backend
            const response = await axios.post(backendUrl, { target: goal, evaluation });

            // Get the AI evaluation result
            const aiEvaluation = response.data.aiEvaluation;

            // Update the specific goal's "achieved" field
            goals.update(currentGoals =>
                currentGoals.map(g => g.id === id ? { ...g, achieved: aiEvaluation } : g)
            );
        } catch (error) {
            console.error("Error evaluating goal:", error);
        }
    }

    // Function to evaluate all goals
    async function evaluateAllGoals() {
        const allGoals = get(goals);
        for (const goal of allGoals) {
            if (goal.goal && goal.evaluation) {
                await evaluateGoal(goal.id, goal.goal, goal.evaluation);
            }
        }
    }

    // Handle input changes
    function handleInput(id: number, field: 'goal' | 'evaluation', value: string) {
        goals.update(currentGoals =>
            currentGoals.map(g => g.id === id ? { ...g, [field]: value } : g)
        );
    }

    // Function to add a new goal row
    const addGoalRow = () => {
        goals.update(currentGoals => [
            ...currentGoals,
            { id: Date.now(), goal: '', evaluation: '', achieved: null }
        ]);
    };

    // Function to delete a goal
    const deleteGoal = (id: number) => {
        goals.update(currentGoals => currentGoals.filter(goal => goal.id !== id));
    };

    // Add an initial goal row if none exist
    $: if (get(goals).length === 0) addGoalRow();
</script>

<!-- Page Layout -->
<div class="min-h-screen bg-base-300 p-8">
    <h1 class="text-2xl font-bold mb-4">Monitoring Page</h1>

    <button on:click={addGoalRow} class="btn btn-primary mb-4">Add New Goal</button>
    <button on:click={evaluateAllGoals} class="btn btn-secondary mb-4">Evaluate All Goals with Gemini AI</button>

    <table class="table-auto w-full shadow-lg rounded-lg overflow-hidden">
        <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm">
                <th class="px-6 py-3">Goal</th>
                <th class="px-6 py-3">Evaluation</th>
                <th class="px-6 py-3">Achieved</th>
                <th class="px-6 py-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each $goals as { id, goal, evaluation, achieved }}
                <tr class="border-b">
                    <td class="px-6 py-4">
                        <input
                            type="text"
                            class="w-full border border-gray-300 rounded px-2 py-1"
                            value={goal}
                            on:input={(e) => handleInput(id, 'goal', (e.target as HTMLInputElement).value)}
                        />
                    </td>
                    <td class="px-6 py-4">
                        <input
                            type="text"
                            class="w-full border border-gray-300 rounded px-2 py-1"
                            value={evaluation}
                            on:input={(e) => handleInput(id, 'evaluation', (e.target as HTMLInputElement).value)}
                        />
                    </td>
                    <td class="px-6 py-4">{achieved || 'Pending'}</td>
                    <td class="px-6 py-4">
                        <!-- Add the Evaluate button for each goal -->
                        <button
                        on:click={() => evaluateGoal(id, goal, evaluation)}
                        class="btn btn-ghost btn-sm"
                        class:bg-green-400={!goal || !evaluation} 
                        class:text-gray-700={!goal || !evaluation} 
                        class:cursor-not-allowed={!goal || !evaluation}
                        disabled={!goal || !evaluation}
                        >
                            Evaluate
                        </button>
                        <button on:click={() => deleteGoal(id)} class="btn btn-error btn-sm ml-2">
                            Delete
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .btn-primary {
        background-color: #3b82f6;
        color: white;
    }

    .btn-secondary {
        background-color: #4ade80;
        color: white;
    }

    .btn-error {
        background-color: #ef4444;
        color: white;
    }

    input[type="text"] {
        border: 1px solid #d1d5db;
        padding: 0.5rem;
        border-radius: 0.375rem;
        width: 100%;
    }
</style>
