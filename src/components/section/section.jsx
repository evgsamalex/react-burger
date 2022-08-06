import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css'

const Section = props => {
  return (
    <section className={styles.section}>
        {props.children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any
};

export default Section;
