import React from 'react';

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
  const renderableContent = content.map((arrayGroup) => {
    if (arrayGroup.length > 1) {
      return (
        <div className={`${ prefix }__list ${ prefix }__list-wrapper--column-wrap`}>
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
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node),
    ]).isRequired,
    className: React.PropTypes.string,
  };
}
