<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import { useBonedStore } from '$lib/stores/boned/boned.svelte';

  const mounted = $derived(useBonedStore.mounted ? true : false);
</script>

<title>Nalli</title>

{#if mounted}
  <Box>yo</Box>
{/if}

<style lang="scss">
  div {
    text-align: center;
    padding: 16px 0;
    padding-bottom: 24px;
  }
</style>
