import React from 'react';
import PropTypes from 'prop-types';

export default function SectionsCardWrapper(props) {
  const content = [];
  const { children, className } = props;
  const prefix = className ? `${ className }` : 'sections-card';
  React.Children.forEach(children, (child, key) => {
    const orderProp = child.props.order;
    const childOrder = isNaN(orderProp) ? key : orderProp;
    const renderedChild = (
      <child.type
        key={key}
        prefix={prefix}
        {...child.props}
      />
    );
    if (content[childOrder]) {
      content[childOrder] = content[childOrder].concat([ renderedChild ]);
    } else {
      content[childOrder] = [ renderedChild ];
    }
  });
  const renderableContent = content.map((arrayGroup, i) => {
    if (arrayGroup.length > 1) {
      return (
        // i in this case is the same as childOrder (see above) and so seems good enough for the key.
        // However, because we're mixing raw children with groups, the keys might repeat.
        // Therefore we need to distinguish them somehow, that's where `column_${i}` comes from.
        <div key={`column_${ i }`} className={`${ prefix }__list ${ prefix }__list-wrapper--column-wrap`}>
          {arrayGroup}
        </div>
      );
    }
    return arrayGroup[0];
  });
  return (
    <nav role="nav" className={`${ prefix }`}>
      <div className={`${ prefix }__wrapper`}>
        <div className={`${ prefix }__menu`}>
          {renderableContent}
        </div>
      </div>
    </nav>
  );
}

if (process.env.NODE_ENV !== 'production') {
  SectionsCardWrapper.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
  };
}
