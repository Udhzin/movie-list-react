import React from 'react';
import './App.css';
import {moviesData} from './moviesData';
import MovieItem from './MovieItem'

//UI = fn(state, props)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {return item.id !== movie.id})

    this.setState({
      movies: updateMovies
    })
  }

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {return item.id !== movie.id})

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="row">
                  {this.state.movies.map(movie => {
                    return(
                      <div className="col-6 mb-4" key={movie.id} >
                        <MovieItem movie={movie}
                                   removeMovie={this.removeMovie}
                                   addMovieToWillWatch={this.addMovieToWillWatch}
                                   removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                        />
                      </div>
                    );
                  })}
                </div>
            </div>
            <div className="col-3">Watch: {this.state.moviesWillWatch.length}</div>
          </div>
        </div>
    );
  }
}

export default App;
