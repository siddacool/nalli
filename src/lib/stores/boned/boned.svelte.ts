import { nanoid } from 'nanoid';
import { db } from '../db';
import type { Boned } from './types';
import type { People } from '../people/type';

async function getBoned(idToFind: string) {
  try {
    const boned = await db.boned.where({ _id: idToFind }).first();

    return Promise.resolve(boned);
  } catch (error) {
    return Promise.reject(error);
  }
}

function createBonedStore() {
  let data: Boned[] = $state([]);
  let fetching: boolean = $state(false);
  let mounted: boolean = $state(false);

  return {
    get data() {
      return data;
    },
    get fetching() {
      return fetching;
    },
    get mounted() {
      return mounted;
    },
    async init() {
      try {
        fetching = true;

        const unorderedBoned = await db.boned?.toArray();

        data = unorderedBoned.sort((a, b) => b.createdAt - a.createdAt);

        return Promise.resolve();
      } catch (e) {
        console.error(e);

        return Promise.reject(e);
      } finally {
        fetching = false;
        mounted = true;
      }
    },
    async add(person: People) {
      try {
        fetching = true;

        await db.boned.add({
          _id: nanoid(),
          by: person,
          createdAt: Date.now(),
        });

        const unorderedBoned = await db.boned?.toArray();

        data = unorderedBoned;

        return Promise.resolve();
      } catch (e) {
        console.error(e);

        return Promise.reject(e);
      } finally {
        fetching = false;
      }
    },
    async delete(idToDelete: string) {
      try {
        fetching = true;

        const targetBook = await getBoned(idToDelete);

        if (!targetBook) {
          throw Error('BonedStore:delete: Book is missing');
        }

        await db.boned.delete(targetBook.id);

        const unorderedBoned = await db.boned?.toArray();

        data = unorderedBoned;

        return Promise.resolve();
      } catch (e) {
        console.error(e);

        return Promise.reject(e);
      } finally {
        fetching = false;
      }
    },
  };
}

export const useBonedStore = createBonedStore();
