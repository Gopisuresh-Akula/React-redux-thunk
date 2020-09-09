import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { POSTER_PATH } from '../Consts';

const MoviePreview = ({ id, title, poster_path }) => (
  <Wrapper>
    <Link to={`/movies/${id}`}>
      <Poster alt={title} src={POSTER_PATH + poster_path} />
    </Link>
  </Wrapper>
);

MoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  width: 20%;
  margin: 0 0 40px;
  padding: 0 20px;
  flex: 0 0 auto;
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  box-shadow: 0 0 35px black;
`;

export default MoviePreview;