import styled from "styled-components";
import db from "../db.json";

import Widget from "../src/components/Widget";
// import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import ValorantLogo from "../src/components/ValorantLogo";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Home = () => {
  return (
    <>
      <div>
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
          }}
          loop={true}
          muted={true}
          autoPlay={true}
        >
          <source src={db.bg}></source>
        </video>
        {/* <QuizBackground> */}
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <ValorantLogo></ValorantLogo>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <Widget.Input placeholder="Diz aí seu nome pra jogar :)" />
            </Widget.Content>
            {/* <Widget.Button /> */}
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>
                Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
                fez:
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/daniel-boll" />
        {/* </QuizBackground> */}
      </div>
    </>
  );
};

export default Home;
