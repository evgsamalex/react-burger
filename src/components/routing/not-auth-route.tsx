import React, {FC, useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useAuth} from "../../hooks/useAuth";
import {Redirect, Route, RouteProps, useLocation} from "react-router-dom";
import {routes} from "../../utils/routes";
import {checkUserAsync} from "../../services/actions/user/checkUserAsync";
import {useAppDispatch} from "../../services/hooks";
import {TLocationState} from "../../pages";

const NotAuthRoute: FC<RouteProps> = ({children, ...rest}) => {
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

  const location = useLocation<TLocationState>();


  if (!isUserLoaded) return null;

  return (
    <Route
      {...rest}
      render={() =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={location?.state?.from || routes.main}
          />
        )
      }
    />
  );
};

NotAuthRoute.propTypes = {
  children: PropTypes.node,
};

export default NotAuthRoute;
