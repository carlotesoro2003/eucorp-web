<script lang="ts">
    import "tailwindcss/tailwind.css";
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';
    import { error } from '@sveltejs/kit';
    import { page } from '$app/stores';

    let department: { id: string; name: string; full_name: string } | null = null;
    let loading = false;
    let successMessage: string | null = null;
    let errorMessage: string | null = null;

    // Fetch department details
    onMount(async () => {
        const params = $page.params;

        const { data, error: fetchError } = await supabase
            .from('departments')
            .select('id, name, full_name')
            .eq('id', params.id)
            .single();

        if (fetchError) {
            console.error('Error fetching department details:', fetchError);
            throw error(404, 'Department not found');
        } else {
            department = data;
        }
    });

    // Update department details
    const saveDepartment = async () => {
        if (department) {
            loading = true;
            const { error: updateError } = await supabase
                .from('departments')
                .update({
                    name: department.name,
                    full_name: department.full_name
                })
                .eq('id', department.id);

            if (updateError) {
                errorMessage = 'Error updating department';
                console.error(errorMessage, updateError);
            } else {
                successMessage = 'Department updated successfully';
            }
            loading = false;
        }
    };

    // Delete department
    const deleteDepartment = async () => {
        if (department) {
            loading = true;
            const { error: deleteError } = await supabase
                .from('departments')
                .delete()
                .eq('id', department.id);

            if (deleteError) {
                errorMessage = 'Error deleting department';
                console.error(errorMessage, deleteError);
            } else {
                successMessage = 'Department deleted successfully';
            }
            loading = false;
        }
    };
</script>

<div class="hero min-h-screen bg-base-200 overflow-y-auto">
    <div class="hero-content flex flex-col items-center justify-center w-full">
        {#if loading}
        <div class="flex items-center justify-center h-full">
            <span class="loading loading-lg text-primary"></span>
        </div>
        {:else}
        <div class="w-full max-w-xl px-6 py-8 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-white mb-6">Edit Department</h1>

            {#if successMessage}
            <div class="alert alert-success mb-4">
                <span>{successMessage}</span>
            </div>
            {/if}

            {#if errorMessage}
            <div class="alert alert-error mb-4">
                <span>{errorMessage}</span>
            </div>
            {/if}

            {#if department}
            <div class="form-control mb-4">
                <label for="name" class="label text-white">Name</label>
                <input type="text" id="name" bind:value={department.name} class="input input-bordered w-full px-4 py-2 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div class="form-control mb-6">
                <label for="full_name" class="label text-white">Full Name</label>
                <input type="text" id="full_name" bind:value={department.full_name} class="input input-bordered w-full px-4 py-2 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div class="flex justify-between items-center space-x-4">
                <button on:click={saveDepartment} class="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 ease-in-out w-full sm:w-auto">Save</button>
                <button on:click={deleteDepartment} class="btn btn-danger px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-red-600 transition duration-300 ease-in-out w-full sm:w-auto">Delete</button>
            </div>
            {/if}
        </div>
        {/if}      
    </div>
</div>
