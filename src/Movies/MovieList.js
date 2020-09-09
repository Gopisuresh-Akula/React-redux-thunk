/* eslint react/no-did-mount-set-state: 0, no-console: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
// Import child components
import MoviePreview from './MoviePreview';
import { getMovies } from './Actions';
class MovieList extends PureComponent {



componentDidMount() {
if(!this.props.isLoaded)

  this.props.getMoviesprop()
}


  render() {
    return (
      <MovieGrid>
        {this.props.Movies.map(movie => <MoviePreview key={movie.id} {...movie} />)}
      </MovieGrid>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    Movies: state.MovieReducer.Movies,
    isLoaded: state.MovieReducer.isMoviesLoaded
  }
}
const mapDispatchToProps = (dispatch) =>bindActionCreators({
  getMoviesprop:getMovies
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(MovieList)

const MovieGrid = styled.div`
  display: flex;
  padding: 40px 20px;
  flex-wrap: wrap;
`;