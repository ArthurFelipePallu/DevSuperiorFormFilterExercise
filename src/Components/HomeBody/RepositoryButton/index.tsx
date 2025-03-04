import "./styles.css";

type Props ={
    buttonImg:string;
    buttonText:string;
}


export default function RepositoryButton( buttoInfo : Props) {
  
  return (
    <div className="homebody-repository-button">
      <img
        src={buttoInfo.buttonImg}
        className="homebody-repository-button-image"
      />
      <div className="homebody-repository-button-text">{buttoInfo.buttonText}</div>

    </div>
  );
}
