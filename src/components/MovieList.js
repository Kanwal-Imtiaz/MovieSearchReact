import React from 'react'
import MovieRow from './MovieRow';

function MovieList({ movies }){


return(

        movies.map((movie,i) => {
					return (
						<MovieRow key= {movie.id} movie ={movie} />
					);
				})

	);
}
export default MovieList;