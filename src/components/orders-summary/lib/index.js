import {OrderStatus} from "../../../types/OrderStatus";

export const summarySelector = (ids) => state => {
  const result = {
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

