import React, { Component } from 'react';


class Subject extends Component {
 

   
    render() {
        const {title,sub} = this.props;
        return (
            <header>
                <h1>{title}</h1>
                {sub}
            </header>
        );
    }
}



export default Subject;