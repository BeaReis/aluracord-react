import React from "react";
import {
  Button,
  Box,
  Textfield,
  Wrapper,
  Text,
  Profile,
  PhotoArea,
} from "./style";
import { apiData } from "../../services/github";
import { useRouter } from "next/router";

function HomePage() {
  const roteamento = useRouter();
  const [username, setUsername] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [repos, setRepos] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  function handleVisibility(valor) {
    valor != "" ? setVisibility(true) : setVisibility(false);
  }

  async function handleClick(user) {
    if (user.length > 2) {
      const githubData = await apiData(user);
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
              handleClick(valor);
            }}
          />
          <Button
            onClick={function (event) {
              event.preventDefault();
              if (username === "") {
                alert("User not found!");
              } else {
                roteamento.push(`/chat/chat?username=${username}`);
              }
            }}
          >
            Entrar
          </Button>

        </Wrapper>
      </Box>
    </div>
  );
}

export default HomePage;
