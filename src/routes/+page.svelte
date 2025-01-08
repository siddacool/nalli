<script lang="ts">
  import Box from '$lib/components/Box.svelte';
  import NalliLastTimeHeader from '$lib/components/NalliLastTimeHeader.svelte';
  import Button from '$lib/components/ui-framework/Form/Button.svelte';
  import { useBonedStore } from '$lib/stores/boned/boned.svelte';
  import { People } from '$lib/stores/people/type';

  const mounted = $derived(useBonedStore.mounted ? true : false);
</script>

<title>Nalli</title>

{#if mounted}
  <Box>
    <NalliLastTimeHeader />
    <hr />

    <br />

    <section>
      <h3>Who got nalli this time?</h3>

      <article>
        <Button variant="primary" onclick={() => useBonedStore.add(People.Sid)}>Sid</Button>
        <Button variant="primary" onclick={() => useBonedStore.add(People.Sumit)}>Sumit</Button>
      </article>
    </section>
  </Box>
{/if}

<style lang="scss">
  article {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
</style>
