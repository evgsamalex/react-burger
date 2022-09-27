import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useAuth} from "../../hooks/useAuth";
import {Redirect, Route} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useDispatch} from "react-redux";
import {checkUserAsync} from "../../services/actions/user/checkUserAsync";

const ProtectedRoute = ({children, ...rest}) => {
  const [auth,] = useAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const dispatch = useDispatch();

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

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
