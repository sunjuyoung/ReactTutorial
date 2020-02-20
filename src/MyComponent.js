import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children,favoriteNumber}) => {
   
    return (
        <div>
            제이름은 {name} <br />
            children 값은 {children}
            <br />
            좋아하는 숫자는 {favoriteNumber}
        </div>
    );

};

MyComponent.defaultProps={
    name :'기본이름'
};


MyComponent.PropsTypes={
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};



export default MyComponent;