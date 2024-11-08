<script lang="ts">
    import "tailwindcss/tailwind.css";
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabaseClient';
    import { goto } from '$app/navigation';

    let departments: Array<{ id: number; name: string; full_name: string }> = [];

    // Fetch all departments
    onMount(async () => {
        const { data, error } = await supabase
            .from('departments')
            .select('id, name, full_name');

        if (error) {
            console.error('Error fetching departments:', error);
        } else {
            departments = data;
        }
    });

    // Navigate to the selected department
    const viewDepartment = (id: number) => {
        goto(`/departments/${id}`);
    };
</script>

<div class="min-h-screen bg-base-300 p-8">
    <h1 class="text-2xl font-bold mb-4">Department List</h1>

    <table class="table-auto w-full text-left">
        <thead>
            <tr class="bg-gray-200">
                <th class="px-4 py-2">Department Name</th>
                <th class="px-4 py-2">Full Name</th>
                <th class="px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each departments as department}
                <tr class="border-b">
                    <td class="px-4 py-2">{department.name}</td>
                    <td class="px-4 py-2">{department.full_name}</td>
                    <td class="px-4 py-2">
                        <button
                            type="button"
                            class="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                            on:click={() => viewDepartment(department.id)}
                        >
                            View
                        </button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
