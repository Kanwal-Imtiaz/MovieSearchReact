import React from 'react'
import './MovieRow.css';


class MovieRow extends React.Component
{

 	viewMovie(){
 		//console.log("*Trying to view movie*" );
		//console.log(this.props.movie.title);
		const url = "https://www.themoviedb.org/movie/" +this.props.movie.id;
		window.open(url); 
	}

render(){
	return(
		<div className="container">
		<table key={this.props.movie.id} className="row"> 
        <tbody>
          <tr>
            <td> 
            <img className="poster" alt= "poster" src ={this.props.movie.poster_src} width="150"/>

            </td>

            <td width="8" />

            <td>
            <h3>{this.props.movie.title}</h3>

            <p> {this.props.movie.overview} </p>
            <p> Rating: {this.props.movie.vote_average}</p>
            <br/>
            <input className="btn" type="button" value="View" onClick={this.viewMovie.bind(this)}/>

            </td>
          </tr>

        </tbody>
       </table>
       </div>

		
	);
}
}

export default MovieRow;