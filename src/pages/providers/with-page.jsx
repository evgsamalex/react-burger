import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from "../../components/app-header/app-header";
import styles from "./with-page.module.css";

const WithPage = (Component) => props => {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <Component {...props} />
    </div>
  );
};

WithPage.propTypes = {
  component: PropTypes.element.isRequired
};

export default WithPage;
