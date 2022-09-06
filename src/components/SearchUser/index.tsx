import { useState } from "react";

import Api from "../../services/api";

type TUserResponse = {
  name: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
};
type TUserState = {
  name: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
};

function SearchUser() {
  const [user, setUser] = useState<TUserState>();
  const [userName, setUserName] = useState("");

  const userCall = () => {
    Api.get<TUserResponse>(`${userName}`)
      .then((response) =>
        setUser({
          name: response.data.name,
          avatar_url: response.data.avatar_url,
          public_repos: response.data.public_repos,
          followers: response.data.followers,
        })
      )
      .catch((err) => {
        console.error("erro aqui ", err);
      });
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={userCall}>Buscar</button>
        <p>User: {user?.name}</p>
        <img src={user?.avatar_url} alt="" />
        <p>Repositorios {user?.public_repos}</p>
        <p>seguidores {user?.followers}</p>
      </div>
    </>
  );
}

export default SearchUser;
