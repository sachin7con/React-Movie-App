import React from 'react';
import '../App.css';


const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

function GenreFilter({ setSelectedGenre }){
    const selectGenre = (e) =>{
      setSelectedGenre(e.target.textContent.trim());
       console.log("Filtering by" + e.target.textContent);

    };

  return(
        <div id="container1">
      <h1>Filter By Genre</h1>
      <div>
        {genres.map((gen, index) => (
           <button key={index} onClick={selectGenre}> {gen} </button>
        ))}
      </div>

    </div>
  );
}


export default GenreFilter;
