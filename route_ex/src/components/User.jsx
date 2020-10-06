import React,{useState,useEffect,useCallback} from 'react';
import './user.css';
import axios from 'axios';

const User = ({users}) => {
//const [users,setUsers] = useState([]);
const [name,setName] = useState('');
const [age,setAge] = useState('');
const [married,setMarried] = useState(false);

 useEffect(()=>{
/*     const fetchUsers = async()=>{
        try {
            const response = await axios.get('http://localhost:8000');
            setUsers(response.data);
        } catch (error) {
            
        }
    }
    fetchUsers(); */
},[users]); 

const onSubmit =  async (e)=>{
    console.log("zmff");
    e.preventDefault();
    try {
         await axios.post('http://localhost:8000/users',{
            name:name,
            age:age,
            married:married,
        });
    } catch (error) {
        console.log(error);
    }
    
   
};

const onChange= (e)=>{
  setMarried(!married);
};

if(!users){
    return null;
}
    return (
        <div className="user">
            <h1>사용자 등록</h1>
            <div className="user_submit">
                <form onSubmit={onSubmit}>
                <div className="user_input">
                <input type="text" name="name" id="name" placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input type="number" min="4" max="140" name="age" id="age" placeholder="나이" value={age} 
                onChange={(e)=>{
                    if(e.target.value >140){
                        setAge(0);
                        e.target.value=0;
                        alert('140미만');
                    }
                    setAge(e.target.value)}}/>
                </div>
                <div className="user_checkbox">
                <input type="checkbox" name="married" id="married" value={married} onChange={onChange}/> 결혼여부
                </div>
                <div className="user_button">
                <button type="submit">등록</button>
                </div>
                </form>
            </div>
            <hr></hr>
            <div className="user_list">
                <table>
                    <thead>
                        <tr>
                            <th>아이디</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>결혼여부</th>
                        </tr>
                    </thead>
                    <tbody>
                          {users.map((user,i)=>(
                            <tr>
                              <td >{user.id}</td>
                              <td >{user.name}</td>
                              <td >{user.age}</td>
                              <td >{user.married ? "앙":""}</td>
                            </tr>
                          ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;