import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const cardstyle = {
    width: "100%",
    height: "auto",
    color: "white"
  };

const Movies = ({title, release_date, poster_path, overview, vote_average, loading}) => {

    if(loading){
        return <div class="spinner-border  text-light"></div>
    }

    return <div className="col-md-3 my-3">
        <div className="card bg-dark" style={cardstyle}>
            <img className="card-img-top" src={poster_path ? (IMG_API + poster_path) : 'http://www.clipartbest.com/cliparts/KTn/enn/KTnennLTq.svg'} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title} ({release_date.slice(0,4)})</h5>
                <p className="card-text"><small>{overview.slice(0,100)}...</small></p>
                <h6>Rating: <span className="badge bg-danger">{vote_average}</span></h6>
            </div>
        </div>
    </div>
    
}


export default Movies;
