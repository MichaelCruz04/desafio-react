import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import { Button, Image } from "./style";
import MyUser from "./types";
import RepositoriesList from "../RepositoryList";

function User() {
  const params = useParams();
  const userUrl = params.user ? `users/${params.user}` : "users/michaelcruz04";
  const { data: user, isFetching } = useFetch<MyUser>(userUrl);
  const [query, setQuery] = useState("");

  const userCall = () => {
    window.location.href = `/${query}`;
  };

  return (
    <>
      {isFetching && <p>carregando...</p>}
      <p>User: {user?.name}</p>
      <Image src={user?.avatar_url} alt="" />
      <p>seguidores {user?.followers}</p>
      <div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button onClick={userCall}>Buscar</Button>
      </div>
      <RepositoriesList />
    </>
  );
}
export default User;
