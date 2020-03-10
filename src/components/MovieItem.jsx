import React from "react";
// super program
class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            willWatch: false,
        };
    
    }

        render () {
            const {movie, removeMovie, addMovieToWillWath, removeMoviesFromWillWatch} = this.props;
            return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                    movie.poster_path}`}
                    alt=""
                />
            <div className="card-body">
             <h6 className="card-title">{movie.title}</h6>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Rating: {movie.vote_average}
                    </p>
                    {this.state.willWatch ? (<button type = "button" className = "btn btn-success" onClick = {
                        () => {this.setState({willWatch: false}); removeMoviesFromWillWatch(movie)}
                    }>Remove Will Watch</button>) :
                    (<button type="button" className="btn btn-secondary" onClick = {() => { this.setState({willWatch: true}); 
                        addMovieToWillWath(movie)}}>
                        Add Will Watch
                    </button>)}
                    <div>
                    <button onClick = {removeMovie.bind(null, movie)}>Delete movie
                    </button>
                    </div>
                </div>
           </div>  
           </div>
            );}}


export default MovieItem;