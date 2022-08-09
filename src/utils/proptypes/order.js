import PropTypes from "prop-types";

export const orderPropTypes = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  accepted: PropTypes.bool,
  __v: PropTypes.number
})
