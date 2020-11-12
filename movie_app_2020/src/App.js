import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css'

class App extends Component {
  state={
    isLoading:true,
    movies:[]
  };
  /* axios 영화데이터를 받아오는  getMovie함수를 기다리고 반환하는 데이터 잡기*/
  getMoives= async ()=>{
    const {data:{data:{movies}}} = 
    await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    console.log(movies);
    this.setState({movies:movies,isLoading:false});
  }
  componentDidMount(){
    this.getMoives();
  }
  render() {
    const {isLoading,movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
          <span className="loader__text">Loading...</span>
          </div>
        ):(
          <div className="movies">
          {movies.map((movie)=>{
          return <Movie key={movie.id}
                      id={movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}/>
        })}
        </div>
        )}
     </section>
    );
  }
}

export default App;