import React, {useEffect, useState} from 'react';
import Movies from './Movies';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c653e771918192592c3f8a791830c840&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=c653e771918192592c3f8a791830c840&query=";

function Discover() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(FEATURED_API)  
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      setLoading(false);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return <div>
      <div className="container my-4">
        <form className="d-flex" onSubmit={handleOnSubmit}>
          <input className="form-control me-2" type="search" vlaue={searchTerm} onChange={handleOnChange} placeholder="Search movie by title..."/>
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
        <div className="row" data-masonry='{"percentPosition": true }'>
          {movies.length > 0 &&
            movies.map((movie) => <Movies key={movie.id} {...movie} loading={loading} />)}
        </div>
      </div>
  </div>;
}

export default Discover;
