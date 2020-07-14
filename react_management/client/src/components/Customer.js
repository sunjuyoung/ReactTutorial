import React from 'react';
import TabelRow from '@material-ui/core/TableRow';
import TabelCell from '@material-ui/core/TableCell';


class Customer extends React.Component{
    render(){
        return (
<TabelRow>
        <TabelCell>{this.props.id}</TabelCell>
        <TabelCell><img src={this.props.id} /></TabelCell>
        <TabelCell>{this.props.name}</TabelCell>
        <TabelCell>{this.props.region}</TabelCell>
       
</TabelRow>

  

        )
    }
}





export default Customer;