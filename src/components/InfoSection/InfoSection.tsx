import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface InfoData {
  data: {
    nickname: string;
    fullname: string;
    description: string;
  };
}

const InfoSection = (props: InfoData) => {
  const { nickname, fullname, description } = props.data;

  return (
    <InfoSectionStyled>
      <span className='nickname'>{nickname}</span>
      <h2 className='fullname'>{fullname}</h2>
      <p className='description'>{description}</p>
    </InfoSectionStyled>
  );
};

const InfoSectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .nickname {
    margin-bottom: 18px;
    font-size: clamp(13px, 2vw, 16px);
  }

  & .fullname {
    line-height: 1.2;
    margin-bottom: 10px;
    text-align: center;
  }

  & .description {
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
`;

InfoSection.propTypes = {
  data: PropTypes.object,
};

InfoSection.defaultProps = {
  data: {
    nickname: '@link.bio',
    fullname: 'Barox Bio Link',
    description: 'Something interesting.',
  },
};

export default InfoSection;
