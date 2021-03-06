import React from 'react';
import './App.scss';
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
      sort_by: 'popularity.desc',
      currentPage: 1,
      total_pages: 500
    }
  }

  componentDidMount() {
   this.getMovies()
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sort_by !== this.state.sort_by || prevState.currentPage !== this.state.currentPage) {
      this.getMovies()
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const {sort_by, currentPage} = nextProps;
    return sort_by !== this.state.sort_by || currentPage !== this.state.currentPage;
  }

  getMovies() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.currentPage}&total_pages=${this.state.total_pages}&adult=true`).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    });
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {return item.id !== movie.id})
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {return item.id !== movie.id})

    this.setState({
      movies: updateMovies,
      moviesWillWatch: updateMoviesWillWatch

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
      currentPage: value
    });
  };

  render() {
    return (
            <div className="container p-3">
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="row mb-3">
                    <div className="col-12">
                      <MovieTabs sort_by={this.state.sort_by}
                                 updateSortBy={this.updateSortBy}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="d-flex mb-3 pt-05 justify-content-end">
                    Will Watch: {this.state.moviesWillWatch.length} Movies
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row mb-2">
                    <div className="col-12">
                      <Pagination currentPage={this.state.currentPage}
                                  onChangePage={this.onChangePage}
                      />
                    </div>
                  </div>
                  <div className="row">
                    {this.state.movies.map(movie => {
                      return(
                              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id} >
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
                      <Pagination currentPage={this.state.currentPage}
                                  total_pages={this.state.total_pages}
                                  onChangePage={this.onChangePage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default App;
