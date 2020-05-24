import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles ,{css} from './withStyles';

class Text extends PureComponent {
    render() {
        const {children,styles,large,primary} = this.props;
        return (

            <div {...css(styles.default,large&&styles.large,primary&&styles.primary)}>
                {children}
            </div>
        );
    }
}

Text.propTypes={
    children : PropTypes.node.isRequired,
    large : PropTypes.bool,
    primary:PropTypes.bool
}


export default withStyles(({color,size})=>({
    default:{
        color:color.default,
        fontSize : size.md,
       
    },
    large:{
        fontSize:size.lg,
    },
    primary:{
        color:color.primary
    }
}))(Text);