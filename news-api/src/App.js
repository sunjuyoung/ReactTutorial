import React,{useState,useCallback} from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category,setCategory] = useState('all');
  const onSelect = useCallback(c=>{
    console.log(c);
    setCategory(c);

  },[])
  return (
    <div className="App">
      <Categories onSelect={onSelect}/>
     <NewsList category={category}/>
    </div>
  );
}

export default App;
