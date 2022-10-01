import React from 'react';
import PropTypes from 'prop-types';
import styles from './icon-link.module.css';
import {getIcon} from "./lib";
import {NavLink, useLocation} from "react-router-dom";

const IconLink = (props) => {

  const location = useLocation();

  const isActivePath = "/" + location.pathname.split('/')[1] === props.to;

  const style = [styles.iconlink, 'pl-5 pt-4 pr-5 pb-4 text_type_main-default']

  if (props.className) {
    style.push(props.className)
  }

  const getClassName = (isActive) => {
    style.push(isActive ? 'text_color_primary' : 'text_color_inactive')
    return style.join(' ')
  }

  return (
    <NavLink to={props.to} className={getClassName} exact={props.exact}>
      {getIcon(props.icon, isActivePath)}
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
