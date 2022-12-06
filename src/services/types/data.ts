export type TIngredient = {
  readonly _id: string,
  readonly name: string,
  readonly type: IngredientType,
  readonly proteins: number,
  readonly fat: number,
  readonly carbohydrates: number,
  readonly calories: number,
  readonly price: number,
  readonly image: string,
  readonly image_mobile: string,
  readonly image_large: string,

  _v: number
}

export enum IngredientType {
  Bun = "bun", Sauce = "sauce", Main = "main"
}

export type TCategory = {
  type: IngredientType,
  name: string
}

export type TBurgerConstructorItem = TIngredient & {
  uuid: string
}

export type TBurgerConstructor = {
  bun: TBurgerConstructorItem | null;

  ingredients: Array<TBurgerConstructorItem>;
}


export type TUser = {
  email: string,
  name: string
}

export type TUserAuth = TUser & {
  password?: string
}

export enum OrderStatus {
  Created = 'created',
  Pending = 'pending',
  Done = 'done'
}

export type TOrder = {
  _id: string,
  createdAt: string,
  ingredients: Array<string>,
  name: string,
  number: number,
  status: OrderStatus,
  updatedAt: string
}

export type TCreateOrder = Omit<TOrder, "ingredients"> & {
  ingredients: Array<TIngredient>
}

export type TStateBase = {
  isLoading: boolean,
  error: string
}
