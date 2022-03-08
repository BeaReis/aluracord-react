import React from "react";
import {
  Button,
  Box,
  Textfield,
  Wrapper,
  Text,
  Profile,
  PhotoArea,
} from "../src/styles/HomePage";
import { apiData } from "../src/services/github";
import { useRouter } from "next/router";

function HomePage() {
  
  // variables
  const routing = useRouter();
  const [username, setUsername] = React.useState("");
  const [followers, setFollowers] = React.useState("");
  const [repos, setRepos] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [visibility, setVisibility] = React.useState(false);

  /* This function sets Photo Area content invisible if input is empty and visible if not */
  function handleVisibility(value) {
    value != "" ? setVisibility(true) : setVisibility(false);
  }

  /* This function sets values of github API into the corresponding fields. It must be async since
  'githubData' is a async function and it returns a promise. */
  async function handleChange(user) {
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
          <Text>Welcome back!</Text>
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
              const value = event.target.value;
              setUsername(value);
              handleVisibility(value);
              handleChange(value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                if (username === "") {
                  alert("User not found!");
                } else {
                  routing.push(`/chat?username=${username}`);
                }
              }
            }}
          />
          <Button
            onClick={function (event) {
              event.preventDefault();
              if (username === "") {
                alert("User not found!");
              } else {
                routing.push(`/chat?username=${username}`);
              }
            }}
          >
            Log In
          </Button>
        </Wrapper>
      </Box>
    </div>
  );
}

export default HomePage;
