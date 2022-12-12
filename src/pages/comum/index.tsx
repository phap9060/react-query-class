import { personagensRickMorty } from "../../services/getCharacters";
import queryImage from "../../assets/query.svg";
import { Card } from "../../components/card";
import "./style.css";
import { useEffect, useState } from "react";

export const Comum = () => {
  const [personagens, setPersonagens] = useState<any[]>([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);

  const catchPersonagens = async () => {
    try {
      setLoad(true);
      const result = await personagensRickMorty();
      console.log(result.data);
      setPersonagens(result.data.results);
      setLoad(false);
    } catch {
      setErro(true);
    }
  };

  useEffect(() => {
    catchPersonagens();
  }, []);

  const rickMortyCard = () => {
    return personagens.map((personagem: any) => (
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
        {load ? <div>Loading...</div> : <div>{rickMortyCard()}</div>}
      </div>
    </div>
  );
};
