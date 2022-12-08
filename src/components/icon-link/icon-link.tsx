import React, {FC} from 'react';
import styles from './icon-link.module.css';
import {NavLink, useLocation} from "react-router-dom";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export enum TIconType {
  Burger = "Burger",
  List = "List",
  Profile = "Profile"
}

type TIconLinkProps = {
  to: string,
  className: string,
  exact?: boolean,
  icon: TIconType,
  text: string
}

const IconLink: FC<TIconLinkProps> = ({exact = false, ...props}) => {

  const location = useLocation();

  const isActivePath = "/" + location.pathname.split('/')[1] === props.to;

  const style = [styles.iconlink, 'pl-5 pt-4 pr-5 pb-4 text_type_main-default']

  if (props.className) {
    style.push(props.className)
  }

  const getClassName = (isActive: boolean) => {
    style.push(isActive ? 'text_color_primary' : 'text_color_inactive')
    return style.join(' ')
  }

  return (
    <NavLink to={props.to} className={getClassName} exact={exact}>
      <ToIcon icon={props.icon} isActive={isActivePath}/>
      {props.text}
    </NavLink>
  );
};


const ToIcon: FC<{ icon: TIconType, isActive: boolean }> = ({isActive, icon}) => {
  const type = isActive ? 'primary' : 'secondary'
  switch (icon) {
    case TIconType.Burger:
      return <BurgerIcon type={type}/>
    case TIconType.List:
      return <ListIcon type={type}/>
    case TIconType.Profile:
      return <ProfileIcon type={type}/>
    default:
      return <BurgerIcon type={type}/>
  }
}

export default IconLink;
