import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Followers,
  HeaderPage,
  Image,
  Input,
  UserName,
} from "./style";
import MyUser from "./types";
import RepositoriesList from "../RepositoryList";
import { useParams } from "react-router-dom";

function User() {
  const param = useParams();
  const [user, setUser] = useState<MyUser | undefined>(undefined);
  const [query, setQuery] = useState(param.user ?? "michaelcruz04");

  const loadUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${query}`);
      let data = await response.json();
      setUser(data);
    } catch (error) {
      setUser(undefined);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Container>
      <HeaderPage>Desafio React</HeaderPage>
      {user?.login ? (
        <>
          <UserName>{user?.name}</UserName>
          <Image src={user?.avatar_url} alt={user?.name} />
          <Followers>seguidores {user?.followers}</Followers>
          <div>
            <Input
              placeholder="Buscar novo usuario"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button onClick={() => loadUserData()}>Buscar</Button>
          </div>
          <RepositoriesList user={user?.login ?? "michaelcruz04"} />
        </>
      ) : (
        <>
          <h1>Usuário não encontrado</h1>
          <Input
            placeholder="Novo usuario"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button onClick={() => loadUserData()}>Buscar</Button>
        </>
      )}
    </Container>
  );
}
export default User;
