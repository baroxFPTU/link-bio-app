import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface LinkData {
  href: string;
  content: string;
}

const LinkButton = (props: LinkData) => {
  return (
    <LinkButtonStyled href={props.href} target='_blank'>
      {props.content}
    </LinkButtonStyled>
  );
};

const LinkButtonStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 150px;
  max-width: 450px;
  padding: 14px 28px;
  margin-bottom: 18px;
  border-radius: 8px;

  color: #f2f2f2;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #617cab, #1e3c72); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #617cab,
    #1e3c72
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  text-decoration: none;

  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

LinkButton.propTypes = {
  href: PropTypes.string,
  content: PropTypes.string,
};

LinkButton.defaultProps = {
  href: '#',
  content: 'Link here',
};

export default LinkButton;
