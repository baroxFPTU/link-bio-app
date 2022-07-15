import React from 'react';
import styled from 'styled-components';

import Avatar from './components/Avatar';
import List from './components/List/List';
import LinkButton from './components/LinkButton/LinkButton';
import InfoSection from './components/InfoSection/InfoSection';

import './styles/index.scss';
import myAvatar from './assets/images/avt.png';
import SocialSection from './components/SocialSection';
import { PROJECT_URLS } from './utils';
import { ProjectData } from './models';

function App() {
  return (
    <AppStyled>
      <Avatar image={myAvatar} />
      <InfoSection
        data={{
          nickname: '@barox.dev',
          fullname: 'Phan Quốc Bảo',
          description:
            'Studying Software Engineering at FPT University.\n Passionately with JS/ReactJS/NodeJS.',
        }}
      />
      <List style={{ marginTop: '60px' }}>
        {PROJECT_URLS.map((project: ProjectData) => (
          <LinkButton key={project.id} href={project.url} content={project.name} />
        ))}
      </List>
      <SocialSection />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: inherit;
  padding-top: 6vh;
`;

export default App;
