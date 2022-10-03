import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
})
