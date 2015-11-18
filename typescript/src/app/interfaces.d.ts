import * as Immutable from "immutable";

// Records
export interface ICard {
  id: number;
  name: string;
}
export type ICardRecord = Immutable.Record.IRecord<ICard>;

export interface IList {
  id: number;
  name: string;
  cards: Immutable.List<number>;
}
export type IListRecord = Immutable.Record.IRecord<IList>;

// Reducers state
export type IListsState = Immutable.Map<number, IListRecord>;
export type ICardsState = Immutable.Map<number, ICardRecord>;


// Global state
export interface IState {
  router: any;
  lists: IListsState;
  cards: ICardsState;
}
