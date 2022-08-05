import { useFetch } from "../../hooks/useEffect";
import RepositoriesComponent from "../RepositoryListComponent";
import MyUser from "./types";

function HomeComponent() {
  const { data: user, isFetching } = useFetch<MyUser>("users/michaelcruz04");
  return (
    <>
      {isFetching && <p>carregando...</p>}
      <p>User: {user?.name}</p>
      <img src={user?.avatar_url} alt="" />
      <p>seguidores {user?.followers}</p>
      <RepositoriesComponent />
    </>
  );
}
export default HomeComponent;
