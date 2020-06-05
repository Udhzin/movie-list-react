import React from 'react';
import './MovieItem.css'

class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            willWatch: false
        }
    }

    render() {
        const {movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch} = this.props;
        return (
                <div className="card">
                    <img className="card-img-top"
                         src={movie.backdrop_path || movie.poster_path ?
                                 `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`
                                 : process.env.PUBLIC_URL + '/img/not_found.png'
                         }
                         alt=""
                    />
                    <div className="card-body">
                        <h6 className="card-title">{movie.title}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Rating: {movie.vote_average}</p>
                            {this.state.willWatch ?
                                    (<button type="button"
                                            className="btn btn-success"
                                             onClick={() => {
                                                 this.setState({
                                                     willWatch: false
                                                 });
                                                 removeMovieFromWillWatch(movie)}
                                             }
                                    >
                                        Remove Will Watch
                                    </button>) :
                                    (<button type="button"
                                            className="btn btn-secondary"
                                            onClick={() => {
                                                this.setState({
                                                    willWatch: true
                                                });
                                                addMovieToWillWatch(movie)}
                                            }
                                    >
                                        Add Will Watch
                                    </button>)
                            }
                        </div>
                        <button type="button" onClick={removeMovie.bind(null, movie)}>Delete Movie</button>
                    </div>
                </div>
        );
    }
}

export default MovieItem;
