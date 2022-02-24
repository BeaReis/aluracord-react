import React, { useEffect } from "react";
import {
  Button,
  Box,
  Textfield,
  Wrapper,
  Text,
  Profile,
  PhotoArea,
} from "./styles/homePage";
import { apiData } from "../services/github";
import { useRouter } from "next/router";

function HomePage() {
  const roteamento = useRouter();
  const [username, setUsername] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [repos, setRepos] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  /***  'useEffect' é um 'Hook'(funções que permitem “ligar-se” aos recursos de state e 
  ciclo de vida do React a partir de componentes funcionais). Ele permite expressar diferentes
  tipos de efeitos colaterais depois que o componente renderiza.  ***/

  /* This const sets the data from github API to the consts defined previously */
  // const setData = ({ followers, public_repos, avatar_url }) => {
  //   setFollowers(followers);
  //   setRepos(public_repos);
  //   username.length > 2 ? setAvatar(avatar_url) : setAvatar("");
  // };

  function handleVisibility(valor) {
    valor != "" ? setVisibility(true) : setVisibility(false);
  }

  async function handleClick() {
    if (username.length > 2) {
      const githubData = await apiData(username);
      setFollowers(githubData.followers);
      setRepos(githubData.public_repos);
      setAvatar(githubData.avatar_url);
    } 
  }

  return (
    <div>
      <Box>
        <Wrapper>
          <Text>Boas vindas de volta!</Text>
          <PhotoArea>
            <Profile src={avatar} />
            {visibility && (
              <Wrapper text>
                <Text profile>{username}</Text>
                <Text profile>👥 Followers: {followers}</Text>
                <Text profile>📁 Repositories: {repos}</Text>
              </Wrapper>
            )}
          </PhotoArea>

          <Textfield
            value={username}
            onChange={function handler(event) {
              const valor = event.target.value;
              setUsername(valor);
              handleVisibility(valor);
            }}
          />
          <Button
            onClick={function (event) {
              event.preventDefault();
              if (username === "") {
                alert("User not found!");
              } else {
                roteamento.push(`/chat?username=${username}`);
              }
            }}
          >
            Entrar
          </Button>
          <Button onClick={() => handleClick()} />
        </Wrapper>
      </Box>
    </div>
  );
}

export default HomePage;
