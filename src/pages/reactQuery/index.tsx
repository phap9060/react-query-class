import { useQuery } from "react-query";
import { randomNames } from "../../services/getCharacters";
import { updateName } from "../../services/changeName";
import queryImage from "../../assets/query.svg";
import { Card } from "../../components/card";
import "./style.css";
import { useEffect, useState } from "react";

export const Query = () => {
  const image = queryImage;

  const [personagens, setPersonagens] = useState<any[]>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const catchPersonagens = async () => {
    try {
      setLoad(true);
      const result = await randomNames();

      setPersonagens(result.data);
    } catch {
      setError(true);
    } finally {
      setLoad(false);
    }
  };

  const Names = (personagens: any) => {
    return personagens?.map((personagem: any) => <Card id={personagem.id} img={personagem.avatar} name={personagem.name} key={personagem.id} />);
  };

  useEffect(() => {
    catchPersonagens();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="react-query">React Query</h1>
        <img className="logo" src={queryImage} />
      </div>

      <div className="body">
        {load === true && <div>Loading...</div>}
        {error === true && <div>Error fetching characters</div>}
        {personagens.length > 0 && <div>{Names(personagens)}</div>}
      </div>
    </div>
  );
};
