import {RootState} from "../../../services/types";
import {OrderStatus} from "../../../services/types/data";

export type TOrderSummary = {
  total: number,
  totalToday: number,
  pending: number[],
  done: number[]
}

export const summarySelector = (ids: string[]) => (state: RootState): TOrderSummary => {
  const result: TOrderSummary = {
    total: state.orders.total,
    totalToday: state.orders.totalToday,
    pending: [],
    done: []
  }

  ids.forEach((id) => {
    const order = state.orders.orders[id];
    if (order) {
      if (order.status === OrderStatus.Done) {
        result.done.push(order.number);
      }
      if (order.status === OrderStatus.Pending) {
        result.pending.push(order.number);
      }
    }
  })

  return result;
}

