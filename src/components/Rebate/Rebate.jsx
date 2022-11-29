import "./rebate.scss";
import Ginger from "../../assets/ginger.png";
import NootrisItem from "../../assets/nootrisItem.png";
import Virus from "../../assets/vorus.png";

const Rebate = () => {
  return (
    <div className="Rebate">
      <div className="Rebate-Body">
        <h2>
          ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
          <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
        </h2>
        <div className="Rebate-Sallary">
          <span className="Rebate-Sallary_discounted">750₽</span>
          <span className="Rebate-Sallary_count">690₽</span>
        </div>
        <div className="Rebate-Items">
          <div>
            <img src={Ginger} alt="ginger" />
            <span className="Rebate-ItemTitle">
              Содержит
              <span>имбирь</span>
            </span>
          </div>
          <div>
            <img src={NootrisItem} alt="Nootris" />
            <span className="Rebate-ItemTitle">
              + Бесплатная доставка
              <span>Специальная цена</span>
            </span>
          </div>
          <div>
            <img src={Virus} alt="virus" />
            <span className="Rebate-ItemTitle">
              Нейтрализует
              <span>вирусы</span>
            </span>
          </div>
        </div>
        <div className="Rebate-Order">
          <button className="Rebate-Button">Оформить заказ!</button>
        </div>
      </div>
    </div>
  );
};

export default Rebate;
