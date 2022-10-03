const webSocketMiddleware = (wsUrl, wsConfig, getToken = undefined) => {
  let socket = null;

  const {wsActions, dataActions} = wsConfig;

  return store => next => action => {
    const {dispatch} = store;

    if (wsActions.start.match(action)) {
      if (socket && socket.readyState === WebSocket.OPEN) {
        return next(action);
      }

      const url = getToken ? `${wsUrl}?token=${getToken().replace('Bearer ', '')}` : wsUrl;

      try {
        socket = new WebSocket(url);
      } catch (e) {
        dispatch(wsActions.error(e.message));
        return;
      }

      socket.onopen = () => {
        dispatch(wsActions.success());
      }

      socket.onerror = event => {
        dispatch(wsActions.error(event));
      }

      socket.onclose = event => {
        if (event.code !== 1000) {
          dispatch(wsActions.closed(event))
        }
      }

      socket.onmessage = event => {
        const data = JSON.parse(event.data);

        dispatch(dataActions.onMessage(data));
      }
    }

    if (wsActions.stop.match(action) && socket) {
      dispatch(dataActions.wsStop())

      socket.close(1000);
      socket = null;
    }

    return next(action);
  }
}

export default webSocketMiddleware;
