import React, {FC, useEffect, useState} from 'react';

import {useAuth} from "../../hooks/useAuth";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {routes} from "../../utils/routes";
import {checkUserAsync} from "../../services/actions/user/checkUserAsync";
import {useAppDispatch} from "../../services/hooks";

const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
  const {auth} = useAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const dispatch = useAppDispatch();

  const init = async () => {
    await dispatch(checkUserAsync());
    setUserLoaded(true);
  }

  useEffect(() => {
    init()
  }, [])

  if (!isUserLoaded) return null;

  return (
    <Route
      {...rest}
      render={({location}) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.login,
              state: {from: location}
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
