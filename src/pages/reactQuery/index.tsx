import { useQuery } from "react-query";
import { personagensRickMorty } from "../../services/getCharacters";
import queryImage from "../../assets/query.svg";
import { Card } from "../../components/card";
import "./style.css";

export const Query = () => {
  const image = queryImage;
  const { data, status } = useQuery(
    "personagensRickMorty",
    personagensRickMorty
  );
  const rickMortyCard = (personagens: any) => {
    return personagens.data.results.map((personagem: any) => (
      <Card name={personagem.name} />
    ));
  };
  return (
    <div className="container">
      <div className="header">
        <h1 className="react-query">React Query</h1>
        <img className="logo" src={queryImage} />
      </div>

      <div className="body">
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error fetching characters</div>}
        {status === "success" && <div>{rickMortyCard(data)}</div>}
      </div>
    </div>
  );
};
