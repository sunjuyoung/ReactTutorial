import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var data = this.props.data;
        var i =0;
        var list =[];
        while(i < data.length){
        list.push(<li key={data[i].id}><a href = {data[i].id}>{data[i].title}</a></li>);

            i++;
        }


        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
            
        );
    }
}

export default TOC;