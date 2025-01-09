<script lang="ts">
  import { getMoment } from '$lib/helpers/time';
  import { useBonedStore } from '$lib/stores/boned/boned.svelte';
  import { People } from '$lib/stores/people/type';
</script>

{#if useBonedStore.data?.length}
  <h1>
    <u>{useBonedStore.data[0]?.by === People.Sid ? 'Sid' : 'Sumit'}</u> got nalli last time
  </h1>

  <p>@{getMoment(useBonedStore.data[0]?.createdAt).format('DD MMM YYYY hh:mm:ss A')}</p>
{/if}

<style lang="scss">
  h1 {
    line-height: 1.5;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
  }

  u {
    color: var(--color-primary-600);
  }
</style>
