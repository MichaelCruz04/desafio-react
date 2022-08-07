import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import { Button, Container, HeaderPage, Image, Input, UserName } from "./style";
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
    <Container>
      <HeaderPage>Desafio React</HeaderPage>
      {isFetching && <p>carregando...</p>}
      {user == null && <p>Usuario não encontrado</p>}
      <UserName>{user?.name}</UserName>
      <Image src={user?.avatar_url} alt={user?.name} />
      <p>seguidores {user?.followers}</p>
      <div>
        <Input
          placeholder="Novo usuario"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button onClick={userCall}>Buscar</Button>
      </div>
      <RepositoriesList />
    </Container>
  );
}
export default User;
