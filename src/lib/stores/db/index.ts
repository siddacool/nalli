import Dexie, { type Table } from 'dexie';
import type { Boned } from '../boned/types';

export class MySubClassedDexie extends Dexie {
  boned!: Table<Boned>;

  constructor() {
    super('bonedDatabase');
    this.version(1).stores({
      boned: '++id, _id',
    });
  }
}

export const db = new MySubClassedDexie();
