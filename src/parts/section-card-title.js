import React from 'react';
import PropTypes from 'prop-types';

export default function SectionCardTitle({ title, prefix }) {
  return (
    <h4 className={`${ prefix }__list-header`}>
      {title}
    </h4>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardTitle.propTypes = {
    title: PropTypes.string,
    prefix: PropTypes.string,
  };
}
