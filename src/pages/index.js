import * as React from "react"
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import Chevron from '../components/chevron'
import { StaticImage } from "gatsby-plugin-image"
import media from "styled-media-query";
import LogoImg from "../svg/logo.svg";
import tendrilBack from "../images/tendril-back.jpg";
import Container from '../components/container'

const chevronAnim = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity:  1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`;

const Header = styled.header`
  display: grid;
  border-top: solid 10px ${p => p.theme.color.primary};
  height: 90vh;
  align-items: center;
  grid-template-rows: minmax(20px, 1fr) 200px minmax(240px, 1fr);
  justify-items: center;
`;

const HeaderSub = styled.div`
  display: grid;
  grid-template-rows: 1fr 100px;
  justify-items: center;
  grid-row: 3;
  height: 100%;
`;

const Logo = styled(LogoImg)`
  height: 100%;
  grid-row: 2;
  margin: 0;
  fill: ${p => p.theme.color.text};
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 4rem;
  font-weight: normal;
`

const IndexChevron = styled(Chevron)`
   animation: ${chevronAnim} 3s ease-in-out infinite;
`;

const GamesSection = styled(Container)`

`;

const Game = styled.div`
  display: grid;
  min-height: 70vh;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin: 40px 0;
  padding: 20px 0;
  grid: "title" max-content
        "img" max-content 
        "desc" min-content 
        "links" min-content /
        1fr;
  background-size: cover;
  background-image: url(${p => p.back});

  ${media.greaterThan("medium")`
    grid-row-gap: 0;
    grid: "title img" max-content 
        "desc img" min-content 
        "links links" min-content /
        1fr 1fr;
  `}        
`;

const GameTitle = styled.a`
  grid-area: title;
  text-align: center;
  z-index: 1;
  &,&:visited {
      color: ${p => p.theme.color.primary};
  };
  &:hover,&:active {
      color: ${p => p.theme.color.primary};
  };
  ${media.greaterThan("medium")`
    text-align: left;
  `}  
`;
const GameDesc = styled.div`
  grid-area: desc;
  z-index: 1;
`;
const GameImage = styled.div`
  grid-column: title-start/img-end;
  grid-row: title-start/img-end;
  overflow: hidden;
`;
const GameLinks = styled.div`
  padding: 20px 0 0 0;
  text-align: center;
  grid-area: links;
`;

const IndexPage = () => {

  return (
    <Layout>
      <Header>
        <Logo />
        <HeaderSub>
          <Title>
            Eldritch Pixels
          </Title>
          <IndexChevron size={50} direction="down" />
        </HeaderSub>
        {/* <div>
          Welcome .. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div> */}

      </Header>
      <main>
        <GamesSection>
          <Game back={tendrilBack}>
            <GameImage>
              {/* <StaticImage src="../images/tendril1.jpg" alt="Tendril: Echo Received" layout="fullWidth" /> */}
            </GameImage>
            <GameTitle href="http://tendrilechoreceived.com/" target="_blank" rel="noopener nofollow"><h3>Tendril: Echo Received</h3></GameTitle>
            <GameDesc>2D stealth platformer inspired by Ridley Scott’s Alien with a focus on freedom of movement.
            You play as a blood-thirsty demonic creature that hunts down everyone on its quest for revenge.
            The main focus is to give you almost no restrictions on movement and let you figure out the best approach.
You need to plan carefully because here, a single bullet kills.</GameDesc>
            <GameLinks>
              <a href="http://tendrilechoreceived.com/" target="_blank" rel="noopener nofollow">Homepage</a> | <a href="https://www.facebook.com/TendrilEchoReceived" target="_blank" rel="noopener nofollow">Facebook</a> | <a href="https://forums.tigsource.com/index.php?topic=60709.0" target="_blank" rel="noopener nofollow">DevLog</a> | <a href="https://www.youtube.com/channel/UCHQoiV2IFzQjhJ7D670coHA" target="_blank" rel="noopener nofollow">Youtube</a>
            </GameLinks>
          </Game>
        </GamesSection>

      </main>
    </Layout>
  )
}

export default IndexPage
