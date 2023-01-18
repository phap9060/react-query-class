import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateName } from "../../services/changeName";
import "./style.css";

type CardProps = {
  name: string;
  img: string;
  id: number;
};

export const Card = (props: CardProps) => {
  const [newName, setNewName] = useState("");

  const onChange = (e: any) => {
    setNewName(e.target.value);
  };

  return (
    <div className="card">
      <div className="name_picture">
        <img className="perfil_picture" src={props.img} alt="foto de perfil" />
        <div className="name">{props.name}</div>
      </div>
      <div className="input_button">
        <input value={newName} onChange={onChange} type="text" />
        <button className="edit_button" onClick={() => console.log("oi")}>
          Editar nome
        </button>
      </div>
    </div>
  );
};

/* const query = useQueryClient();
  const { isLoading, mutate } = useMutation(() => updateName(newName, props.id), {
    onSuccess: () => {
      query.invalidateQueries("randomNames");
      cleanInput();
    },
  });

  const cleanInput = () => {
    setNewName("");
  };
 */
