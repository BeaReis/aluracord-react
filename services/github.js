export const apiData = async (username) => {
  return await fetch(`https://api.github.com/users/${username}`, {
    headers: new Headers({
      "User-agent": "agent-name",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);
};
