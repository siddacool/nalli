import type { People } from '../people/type';

export interface Boned {
  id?: number;
  _id: string;
  createdAt: number;
  by: People;
}
