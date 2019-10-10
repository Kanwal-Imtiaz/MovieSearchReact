import React from 'react';
import Header from './Header';
import './App.css';
//import MovieRow from './MovieRow';
import MovieList from './MovieList';
import $ from 'jquery'; 


class App extends React.Component{
  constructor(props){
    super(props)


    /* https://api.themoviedb.org/3/search/movie?query=marvel&api_key=753aff9045ea9cd4451a39c6b2898dcc

      API-Key= 753aff9045ea9cd4451a39c6b2898dcc*/

    this.state = {
     title: 'MoviesDB Search',
     rows: [],
    };

    this.performSearch("A");
  }

//callback function "searchResults" to run on success
  performSearch(searchTerm){
    //console.log("Perform search using movieDB");

    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=753aff9045ea9cd4451a39c6b2898dcc&query="+searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        //console.log("Data fetched successfully");

        const results = searchResults.results;
        var movieRows =[];

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
          //const row =<MovieRow key= {movie.id} movie ={movie} />
          // {this.state.rows}
          movieRows.push(movie);

        })
        this.setState({rows: movieRows});
      },
      error: (xhr, status, err)  => {
        console.error("Failed to fetch data");

      }

    })


 }

 searchChangeHandler(event){
  const searchMovie = event.target.value;
  const boundObject =this;
 boundObject.performSearch(searchMovie);

 }

  render() {
        return (
            <div>

               <Header title ={this.state.title}/>

                <input className="searchBar" placeholder ="Enter search term" onChange={this.searchChangeHandler.bind(this)}/> 

               <MovieList movies={this.state.rows}/>

 
               
            </div>
        );
    }
}


export default App;
