import React, {FC} from 'react';
import styles from './section.module.css'

const Section: FC = props => {
  return (
    <section className={styles.section}>
      {props.children}
    </section>
  );
};

export default Section;
