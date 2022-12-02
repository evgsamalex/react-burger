export type TIngredient = {
  readonly _id: string,
  readonly name: string,
  readonly type: TIngredientType,
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

export type TIngredientType = "bun" | "sauce" | "main"

export type TCategory = {
  readonly type: TIngredientType,
  readonly name: string
}

export type TBurgerConstructor = {
  bun: TIngredient;

  ingredients: Array<TIngredient>;
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
  ingredients: ReadonlyArray<string>,
  name: string,
  number: number,
  status: OrderStatus,
  updatedAt: string
}

export type TCreateOrder = Omit<TOrder, "ingredients"> & {
  ingredients: ReadonlyArray<TIngredient>
}
