import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const getIcon = (icon, isActive) => {
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
