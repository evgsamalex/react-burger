import PropTypes from "prop-types";
import {ingredientPropTypes} from "./ingredient";
import {userPropTypes} from "./user";

export const orderPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  createdAt: PropTypes.string,
  status: PropTypes.oneOf(['created', 'pending', 'done', 'cancel']),
  ingredients: PropTypes.arrayOf(PropTypes.string)
})

export const orderResultPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  createdAt: PropTypes.string,
  status: PropTypes.oneOf(['created', 'pending', 'done', 'cancel']),
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
  owner: userPropTypes,
  price: PropTypes.number,
  updatedAt: PropTypes.string,
})
