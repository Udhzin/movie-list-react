import React from 'react';
import './MovieItem.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
                    <div className="card-img">
                        <img className="card-img-top"
                             src={movie.backdrop_path || movie.poster_path ?
                                     `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`
                                     : process.env.PUBLIC_URL + '/img/no-image.jpg'
                             }
                             alt=""
                        />
                    </div>
                    <div className="card-body">
                        <h6 className="card-title">{movie.title}</h6>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0">Rating: {movie.vote_average}</p>
                            <progress min={0} max={100} value={movie.vote_average*10} />
                        </div>
                        <div className="card-group d-flex justify-content-between">
                        <button
                            type="button"
                            className="btn btn-secondary d-flex align-items-center col-12 mb-2"
                            onClick={removeMovie.bind(null, movie)}>
                                <DeleteIcon fontSize="small" />
                                Delete Movie
                        </button>
                        {this.state.willWatch ?
                                    (<button type="button"
                                            className="btn btn-success d-flex align-items-center col-12"
                                             onClick={() => {
                                                 this.setState({
                                                     willWatch: false
                                                 });
                                                 removeMovieFromWillWatch(movie)}
                                             }
                                    >
                                        <RemoveIcon fontSize="small" />
                                        Remove Will Watch
                                    </button>) :
                                    (<button type="button"
                                            className="btn btn-secondary d-flex align-items-center col-12 mb-1"
                                            onClick={() => {
                                                this.setState({
                                                    willWatch: true
                                                });
                                                addMovieToWillWatch(movie)}
                                            }
                                    >
                                        <AddIcon fontSize="small" />
                                        Add Will Watch
                                    </button>)
                            }
                        </div>
                    </div>
                </div>
        );
    }
}

export default MovieItem;
