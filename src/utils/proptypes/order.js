import PropTypes from "prop-types";

export const orderPropTypes = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  createdAt: PropTypes.string,
  status: PropTypes.oneOf(['created', 'pending', 'done', 'cancel']),
  ingredients: PropTypes.arrayOf(PropTypes.string)
})
