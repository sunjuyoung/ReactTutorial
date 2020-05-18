import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        const {boolValue,
                numValue,
                arrayValue,
                objValue,
                nodeValue,
                funcValue} = this.props;
        return (
            <div>
                <span>불리언 : {boolValue}</span>
                <span>숫자:{numValue}</span>
                <span>배역 : {arrayValue}</span>
                <span>{String(objValue.name)}</span>
                <span>{nodeValue}</span>
                <span>{funcValue}</span>
                
            </div>
        );
    }
}

export default ChildComponent;