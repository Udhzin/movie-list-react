import React from 'react';
import './App.css';
import { API_KEY_3, API_URL } from '../../utils/api';
import MovieItem from '../MovieItem/MovieItem';
import MovieTabs from '../MovieTabs/MovieTabs';
import Pagination from '../Pagination/Pagination';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'revenue.desc',
      page: 1,
      total_pages: 500
    }
  }

  componentDidMount() {
   this.getMovies()
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sort_by !== this.state.sort_by || prevState.page !== this.state.page) {
      this.getMovies()
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const {sort_by, page} = nextProps;
    return sort_by !== this.state.sort_by || page !== this.state.page;
  }

  getMovies() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.page}&total_pages=${this.state.total_pages}`).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    });
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {return item.id !== movie.id})

    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {return item.id !== movie.id})

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = value => {
   this.setState({
      sort_by: value
    });
  };

  onChangePage = value => {
    this.setState({
      page: value
    });
  };

  render() {
    return (
            <div className="container p-3">
              <div className="row">
                <div className="col-9">
                  <div className="row mb-3">
                    <div className="col-12">
                      <MovieTabs sort_by={this.state.sort_by}
                                 updateSortBy={this.updateSortBy}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-12">
                      <Pagination page={this.state.page}
                                  onChangePage={this.onChangePage}
                      />
                    </div>
                  </div>
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
                  <div className="row">
                    <div className="col-12">
                      <Pagination page={this.state.page}
                                  onChangePage={this.onChangePage}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row mb-3 pt-05">
                    Will Watch: {this.state.moviesWillWatch.length} Movies
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default App;
