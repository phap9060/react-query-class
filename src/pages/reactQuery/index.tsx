import { useQuery } from "react-query";
import { randomNames } from "../../services/getCharacters";
import { updateName } from "../../services/changeName";
import queryImage from "../../assets/query.svg";
import { Card } from "../../components/card";
import "./style.css";

export const Query = () => {
  const image = queryImage;
  const { data, status } = useQuery("randomNames", randomNames);

  const Names = (personagens: any) => {
    return personagens.data.map((personagem: any) => <Card id={personagem.id} onClick={() => console.log("oi")} img={personagem.avatar} name={personagem.name} key={personagem.id} />);
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
        {status === "success" && <div>{Names(data)}</div>}
      </div>
    </div>
  );
};
