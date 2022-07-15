import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AVATAR_HEIGHT, AVATAR_WIDTH } from '../../utils';

interface AvatarProps {
  image: string;
  alt: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarStyled>
      <img src={props.image} alt={props.alt} />
    </AvatarStyled>
  );
};

const AvatarStyled = styled.div`
  width: ${AVATAR_WIDTH}px;
  height: ${AVATAR_HEIGHT}px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  border-radius: 100%;
  overflow: hidden;
  border: 4px solid #fff;
  outline: 1px solid #dbdbdb;
  box-shadow: 0px 6px 10px rgba(164, 164, 164, 0.25);

  & img {
    height: 120%;
    width: 120%;
    object-fit: cover;
    object-position: center;
  }
`;

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  image: 'https://source.unsplash.com/random',
  alt: 'An avatar',
};

export default Avatar;
