<script lang="ts">
  import { getMoment } from '$lib/helpers/time';
  import { useBonedStore } from '$lib/stores/boned/boned.svelte';
  import { People } from '$lib/stores/people/type';
  import Accordian from '../ui-framework/Layout/Accordian.svelte';

  let open = $state(false);
</script>

{#if useBonedStore.data?.length}
  <Accordian title="History" onclick={() => (open = !open)} {open}>
    <table>
      <thead>
        <tr>
          <th>Person</th>
          <th>At</th>
        </tr>
      </thead>
      <tbody>
        {#each useBonedStore.data as boned}
          <tr>
            <td>{boned.by === People.Sid ? 'Sid' : 'Sumit'}</td>
            <td>{getMoment(boned?.createdAt).format('DD MMM YYYY hh:mm:ss A')}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Accordian>
{/if}

<style lang="scss">
  table {
    width: 100%;
  }

  th {
    text-align: left;
    padding: 6px;
  }

  td {
    text-align: left;
    padding: 6px;
    border-bottom: 1px solid var(--color-grey-800);
  }

  tbody {
    tr {
      &:first-child {
        td {
          color: var(--color-primary-600);
        }
      }
    }
  }
</style>
