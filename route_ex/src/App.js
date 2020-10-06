import React,{useEffect,useState,useCallback} from 'react';
import axios from 'axios';
import './App.css';
import {Route,NavLink} from 'react-router-dom';
import Comment from './components/Comment';
import User from './components/User';

function App() {

  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const fetchUsers = async()=>{
        try {
            const response = await axios.get('http://localhost:8000');
            setUsers(response.data);
        } catch (error) {
            
        }
    }
    fetchUsers();
},[]);


  return (
    <div className="app">
    <User users={users}/>
    <Comment />
    </div>
  );
}

export default App;
