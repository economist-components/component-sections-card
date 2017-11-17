import React from 'react';
import PropTypes from 'prop-types';
import SectionCardLinks from './section-card-links';
import SectionCardTitle from './section-card-title';

export default function SectionCardList({ title, links, topic, prefix }) {
  const content = [];
  if (title) {
    content.push(
      <SectionCardTitle
        key={`section-title-${ topic }`}
        title={title}
        prefix={prefix}
      />
    );
  }
  content.push(
    <SectionCardLinks
      key={`section-links-${ topic }`}
      links={links}
      prefix={prefix}
    />
  );
  return (
    <div className={`${ prefix }__list-wrapper ${ prefix }__list-wrapper--${ topic }`}>
      {content}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardList.propTypes = {
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    topic: PropTypes.string,
    className: PropTypes.string,
    prefix: PropTypes.string,
  };
}
