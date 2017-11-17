import React from 'react';
import PropTypes from 'prop-types';
import SectionCardLink from './section-card-link';

export default function SectionCardLinks({ links, prefix }) {
  const renderedLinks = links.map((link, i) => {
    const commonProps = {
      unstyled: true,
      ...link,
    };
    let buttonClassName = `${ prefix }__link`;
    if (link.internal === false) {
      // Use the prop if provided, otherwise the default for external is _blank.
      if (typeof link.target === 'undefined') {
        commonProps.target = '_blank';
      }
      buttonClassName = `${ buttonClassName } ${ prefix }__link--external`;
    }
    return (
      <SectionCardLink
        buttonClassName={buttonClassName}
        buttonProps={commonProps}
        key={`${ prefix }__link_${ i }`}
        title={link.title}
        prefix={prefix}
      />
    );
  });
  return (
    <ul className={`${ prefix }__list`}>
      {renderedLinks}
    </ul>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardLinks.propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    prefix: PropTypes.string,
  };
}
