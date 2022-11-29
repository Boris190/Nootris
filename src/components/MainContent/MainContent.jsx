import "./mainContent.scss";
import Nootris from "../../assets/nootris.png";

const MainContent = () => {
  return (
    <div className="MainContent">
      <div className="MainContent-Body">
        <div className="MainContent-About">
          <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>
          <span className="MainContent-Text">
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </span>
          <h4>NOOTRIS ПОМОГАЕТ</h4>
          <span>Вашему организму во время пандемии и сезонных простуд</span>
        </div>
        <div className="MainContent-Image">
          <img src={Nootris} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
