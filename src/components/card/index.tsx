import "./style.css";

type CardProps = {
  name: string;
};

export const Card = (props: CardProps) => {
  return <div className="card">{props.name}</div>;
};
