import React from 'react';
import PropTypes from 'prop-types';
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './icon-link.module.css';

const IconLink = props => {

  const getIcon = (icon, isActive) => {
    const type = isActive ? 'primary' : 'secondary'
    switch (icon) {
      case 'Burger':
        return <BurgerIcon type={type}/>
      case 'List':
        return <ListIcon type={type}/>
      case 'Profile':
        return <ProfileIcon type={type}/>
      default:
        return <BurgerIcon type={type}/>
    }
  }

  const style = [styles.iconlink, 'pl-5 pt-4 pr-5 pb-4 text_type_main-default']
  if (!props.isActive) {
    style.push(styles.iconlink_inactive)
  }

  if (props.className) {
    style.push(props.className)
  }

  return (
    <a href={props.href} className={style.join(' ')}>
      {getIcon(props.icon, props.isActive)}
      {props.text}
    </a>
  );
};

IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.oneOf(['Burger', 'List', 'Profile']),
  text: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string
};

export default IconLink;
