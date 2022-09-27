import React from 'react';
import PropTypes from 'prop-types';
import styles from './icon-link.module.css';
import {getIcon} from "./lib";
import {NavLink, useRouteMatch} from "react-router-dom";

const IconLink = (props) => {

  const {path} = useRouteMatch();

  const style = [styles.iconlink, 'pl-5 pt-4 pr-5 pb-4 text_type_main-default']

  if (props.className) {
    style.push(props.className)
  }

  const getClassName = (isActive) => {
    if (isActive) return style.join(' ') + ' ' + styles.iconlink_active;
    return style.join(' ')
  }

  return (
    <NavLink to={props.to} className={getClassName} exact={props.exact}>
      {getIcon(props.icon, path && path === props.to)}
      {props.text}
    </NavLink>
  );
};

IconLink.defaultProps = {
  exact: true
}

IconLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(['Burger', 'List', 'Profile']),
  text: PropTypes.string,
  className: PropTypes.string,
  exact: PropTypes.bool
};

export default IconLink;
