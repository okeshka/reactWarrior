import React from "react";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api";
import MovieTabs from "./MovieTabs";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesWilllwatch: [],
            sort_by: "popularity.desc",
        };
     //this.removeMovie = this.removeMovie.bind(this);
    }

    componentDidMount() {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then(response => response.json()).then(data =>
            this.setState({movies: data.results}));
    }

    //removeMovie(movie) 
    removeMovie = movie => {
        const updateMovies = this.state.movies.filter( item => {return item.id !== movie.id});
        console.log(updateMovies);
        this.setState({
            movies: updateMovies,
        });
    }

    addMovieToWillWath = movie => {
        const updateMoviesWillWatch = [...this.state.moviesWilllwatch, movie];
        this.setState({
        moviesWilllwatch: updateMoviesWillWatch,
        });
   }

   removeMoviesFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWilllwatch.filter( item => {return item.id !== movie.id});
       this.setState({
        moviesWilllwatch: updateMoviesWillWatch
    });
    }
   

    render() {
        console.log(this);
        return (
        <div className = "container">
            <div className = "row mt-4">
            <div className = "col-9">
            <div className = "row mb-4">
            <div className = "col-12">
            <MovieTabs />
            </div>
            {this.state.movies.map(movie => {
            return (
            <div className = "col-6 mb-4" key = {movie.id}>
            <MovieItem movie = {movie} removeMovie = {this.removeMovie} addMovieToWillWath = {this.addMovieToWillWath} 
                removeMoviesFromWillWatch = {this.removeMoviesFromWillWatch}
            />
            </div>
            )
        })}
        </div>
        </div>
        <div className = "col-3">Will watch {this.state.moviesWilllwatch.length}</div>
        </div>
        </div>
        )}
}

// function App() {
// return <div>{moviesData[0].title}</div>
// }

export default App;
