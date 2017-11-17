import React from 'react';
import PropTypes from 'prop-types';
import Button from '@economist/component-link-button';

export default function SectionCardLink({ buttonClassName, linkClassName, title, buttonProps, prefix }) {
  const { internal, ...cleanedButtonProps } = buttonProps; // eslint-disable-line no-unused-vars
  const customLinkClassName = linkClassName ?
  `${ prefix }__list-item ${ prefix }__list-item--${ linkClassName }` :
  `${ prefix }__list-item`;
  return (
    <li className={customLinkClassName}>
      <Button
        {...cleanedButtonProps}
        className={buttonClassName}
      >
        {title}
      </Button>
    </li>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionCardLink.propTypes = {
    buttonClassName: PropTypes.string,
    linkClassName: PropTypes.string,
    buttonProps: PropTypes.shape({
      target: PropTypes.string,
      unstyled: PropTypes.bool,
      href: PropTypes.string,
      title: PropTypes.string,
    }),
    title: PropTypes.string,
    prefix: PropTypes.string,
  };
}
