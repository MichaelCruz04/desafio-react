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

const User: React.FC = () => {
  const param = useParams();
  const defaultUser = param.user ?? "michaelcruz04";
  const [user, setUser] = useState<MyUser | undefined>(undefined);
  const [queryResult, setQueryResult] = useState<string>(defaultUser);
  const [query, setQuery] = useState<string>(defaultUser);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${queryResult}`
        );
        let data = await response.json();
        setUser(data);
      } catch (error) {
        setUser(undefined);
      }
    };
    loadUserData();
  }, [queryResult]); //quando esse array é vazio useffect é executado quando o componente é criado, quando esse array tem variaveis o useeffect é executado toda vez que o valor das variaveis muda

  return (
    <Container>
      <HeaderPage>Desafio React</HeaderPage>
      {user?.login ? ( //aqui faco a verificacao se tenho a informacao do usuario
        <>
          <UserName>{user?.name}</UserName>
          <Image src={user?.avatar_url} alt={user?.name} />
          <Followers>seguidores {user?.followers}</Followers>
          <div>
            <Input
              placeholder="Buscar novo usuario"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)} //faz a mesma funcao de setUser, mas para variavel query
            />
            <Button onClick={() => setQueryResult(query)}>Buscar</Button>
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
          <Button onClick={() => setQueryResult(query)}>Buscar</Button>
        </>
      )}
    </Container>
  );
};
export default User;
