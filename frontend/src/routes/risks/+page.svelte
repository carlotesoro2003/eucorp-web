<script lang="ts">
  import { supabase } from "$lib/supabaseClient";
  import DepartmentRisks from "$lib/components/departments/DepartmentRisks.svelte";
  import AdminRisks from "$lib/components/administrator/AdminRisks.svelte";
  import { onMount } from "svelte";

  let session: any = null;
  let profile: any = null;
  let isLoading = true;
  let errorMessage: string | null = null;

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      session = sessionData.session;
      if (session) {
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
        if (profileError) throw profileError;
        
        profile = profileData;
        console.log("Profile Id: ", profile.id);
        console.log("Profile Role: ", profile.role);
      } else {
        errorMessage = "User is not logged in.";
      }
    } catch (error) {
      console.error((error as Error).message);
      errorMessage = "Failed to fetch profile data.";
    } finally {
      isLoading = false;
    }
  };

  onMount(() => {
    fetchUserProfile();
  });
</script>

<div>
  {#if isLoading}
    <p>Loading...</p>
  {:else if errorMessage}
    <p class="text-red-500">{errorMessage}</p>
  {:else}
    {#if profile?.role === 'admin'}
      <AdminRisks />
    {:else}
      <DepartmentRisks />
    {/if}
  {/if}
</div>
