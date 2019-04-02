import React, { Component } from 'react';
import axios from 'axios';
import Movie from './movies';

class MovieContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        const itunesURL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';

        // Use Axios to make a GET request to iTunes
        axios.get(itunesURL).then((response) => {
            this.setState({
                movies: response.data.feed.entry
            });
        });
    }

    render(){
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index} />
        });

        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MovieContainer;