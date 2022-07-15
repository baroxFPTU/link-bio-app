import React from 'react';
import styled from 'styled-components';
import { SOCIAL_URLS } from '../../utils';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from '../Icon';

const SocialSection = () => {
  return (
    <SocialSectionStyled>
      <li>
        <a href={SOCIAL_URLS.github} target='_blank' rel='noreferrer'>
          <img src={GithubIcon} alt='' />
        </a>
      </li>
      <li>
        <a href={SOCIAL_URLS.instagram} target='_blank' rel='noreferrer'>
          <img src={InstagramIcon} alt='' />
        </a>
      </li>
      <li>
        <a href={SOCIAL_URLS.facebook} target='_blank' rel='noreferrer'>
          <img src={FacebookIcon} alt='' />
        </a>
      </li>
      <li>
        <a href={SOCIAL_URLS.linkedin} target='_blank' rel='noreferrer'>
          <img src={LinkedInIcon} alt='' />
        </a>
      </li>
    </SocialSectionStyled>
  );
};

const SocialSectionStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  margin-top: auto;
  margin-bottom: 3rem;

  & li a img {
    width: 30px;
    height: 30px;
  }
`;

export default SocialSection;
