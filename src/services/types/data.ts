import {
  WS_CONNECTION_START,
  WS_CONNECTION_ALL_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_GET_ALL_MESSAGE,
} from "../actions/wsActions";

export type TIngredients = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
  readonly __v: number;
  readonly _id: string;
  readonly id?: string;
  count?: string;
};

export type TConstructorItem = {
  readonly _id: string;
  readonly price: number;
  readonly name: string;
  readonly image: string;
  readonly type?: string;
  readonly index: string | number;
};

export type TUser = {
  readonly password?: string;
  readonly email?: string;
  readonly name?: string;
  token?: string
};

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  owner: object;
  price: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TOrders = {
  readonly orders: Array<TOrder>;
  readonly success: boolean;
  readonly total: number;
  readonly totalToday: number;
};

export type TWSAction = {
  readonly wsInit?: typeof WS_CONNECTION_START;
  readonly wsAll?: typeof WS_CONNECTION_ALL_START;
  readonly onOpen: typeof WS_CONNECTION_SUCCESS;
  readonly onClose: typeof WS_CONNECTION_CLOSED;
  readonly onError: typeof WS_CONNECTION_ERROR;
  readonly onMessage: typeof WS_GET_MESSAGE | typeof WS_GET_ALL_MESSAGE;
};


export type TGetBurgerCount = {
  count: { [name: string]: number };
};