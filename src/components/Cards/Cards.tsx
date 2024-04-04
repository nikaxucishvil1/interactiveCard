import "./Cards.css";
interface porps {
  frontNums: string;
  name: string;
  date: string;
  cvcNum: string | number;
}

function Cards(props: porps) {
  const { frontNums, name, date, cvcNum } = props;
  return (
    <>
      <div className="ParentDiv">
        <div className="frontCard">
          <img src="./src/images/cardLogo.svg" alt="" />
          <h1>{frontNums}</h1>
          <div className="frontCardFooter">
            <p>{name}</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="backCard">
          <div className="backHeader">
          </div>
          <div className="BackMain">
            <p>{cvcNum}</p>
          </div>
          <div className="backFooter">
            <img src="./src/images/backCardLines.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
