import Button from '@economist/component-link-button';
import React from 'react';

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
    buttonClassName: React.PropTypes.string,
    linkClassName: React.PropTypes.string,
    buttonProps: React.PropTypes.shape({
      target: React.PropTypes.string,
      unstyled: React.PropTypes.bool,
      href: React.PropTypes.string,
      title: React.PropTypes.string,
    }),
    title: React.PropTypes.string,
    prefix: React.PropTypes.string,
  };
}
