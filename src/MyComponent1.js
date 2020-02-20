import React , {Component} from 'react';
import propTypes from 'prop-types';

class MyComponent1 extends Component {
    static defaultProps={
        name:' 기본이름'
    };
    static propTypes={
        name:propTypes.string
    }

    render(){
        const {name,favoriteNumber,children} = this.props;
        return(
            <div>
                {name} <br />
                {favoriteNumber}<br />
                {children} <br />
            </div>

        );
    }




}

/* MyComponent1.defaultProps ={
    name : '기본이름'
};

MyComponent1.propTypes={
    name : propTypes.string,
    favoriteNumber : propTypes.number.isRequired
} */

export default MyComponent1;