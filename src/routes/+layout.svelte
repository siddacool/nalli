<script lang="ts">
  import GlobalContainer from '$lib/components/GlobalContainer';
  import MainLayout from '$lib/components/ui-framework/Layout/MainLayout.svelte';
  import type { SvelteComponentProps } from '$lib/types/svelte-component';
  import { useBonedStore } from '$lib/stores/boned/boned.svelte';

  const { children }: SvelteComponentProps = $props();

  $effect(() => {
    async function fetchData() {
      try {
        await useBonedStore.init();
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  });
</script>

<GlobalContainer />

<MainLayout>
  <div>
    {#if children}
      {@render children()}
    {/if}
  </div>
</MainLayout>
