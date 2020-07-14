import React ,{Component} from 'react';
import Customer from './components/Customer'


const customers =[{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '홍길동',
  'region' : '서울'
  
}
,{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '나상욱',
  'region' : '경기'
},{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '유재석',
  'region' : '서울'
}


]

  /*   state ={
    customers :""
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err=>console.log(err));
  }

  callApi = async()=>{
    const response = await fetch('/api/customers');
    const body  = await response.json();
    return body;
  } */

class App extends Component {

  render(){
    return(
      <div>
      {
        customers.map(data=>{
          return <Customer key={data.id}id={data.id} name={data.name} region={data.region} image={data.image} />
        }) 
      }
      </div>

    );
  }

}

export default App;
