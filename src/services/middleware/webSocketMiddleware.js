const webSocketMiddleware = (wsUrl, actions, getToken = undefined) => {
  let socket = null;
  return store => next => action => {

    if (actions.start.match(action)) {
      if (socket && socket.readyState === WebSocket.OPEN) {
        return next(action);
      }

      const {dispatch} = store;

      const url = getToken ? `${wsUrl}?token=${getToken().replace('Bearer ', '')}` : wsUrl;

      try {
        socket = new WebSocket(url);
      } catch (e) {
        dispatch(actions.error(e.message));
        return;
      }

      socket.onopen = () => {
        dispatch(actions.success());
      }

      socket.onerror = event => {
        dispatch(actions.error(event));
      }

      socket.onclose = event => {
        dispatch(actions.closed(event))
      }

      socket.onmessage = event => {
        const data = JSON.parse(event.data);
        dispatch(actions.message(data));
      }
    }

    if (actions.stop.match(action) && socket) {
      socket.close();
    }

    return next(action);
  }
}

export default webSocketMiddleware;
