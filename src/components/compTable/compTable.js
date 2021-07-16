import React from "react";
import DefImg from "../../assets/def.png";
import "./compTable.scss";
import { useDispatch } from "react-redux";
import { setSelHero } from "../../store/searchSlice";

export default function CompTable({ hero1, hero2, onReset }) {
  const dispatch = useDispatch();

  const getStr = (val) => {
    return val && val !== "null" && val !== "undefined" ? val : "-";
  };
  const onHero1 = () => {
    dispatch(setSelHero(hero1));
    window.location.href = "/detail/" + hero1.id;
  };
  const onHero2 = () => {
    dispatch(setSelHero(hero2));
    window.location.href = "/detail/" + hero2.id;
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }
  };
  return (
    <div id="compContainer" className="exp-head comp">
      <div className="exp-container row">
        <table cellSpacing={0}>
          <tbody>
            <tr>
              <td colSpan="5" align="center" className="comp-title">
                <div className={"compTitleContainer"}>
                  Compare PowerStats
                  <a className="btn btn-reset shadow" onClick={handleReset}>
                    Reset
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td rowSpan="7" align="right">
                <img
                  className="shadow"
                  src={hero1.image.url || DefImg}
                  alt="hero photo"
                  onClick={onHero1}
                />
              </td>
              <td>{getStr(hero1.powerstats.intelligence)}</td>
              <td>Intelligence</td>
              <td>{getStr(hero2.powerstats.intelligence)}</td>
              <td rowSpan="7">
                <img
                  className="shadow"
                  src={hero2.image.url || DefImg}
                  alt="hero photo"
                  onClick={onHero2}
                />
              </td>
            </tr>

            <tr>
              <td>{getStr(hero1.powerstats.strength)}</td>
              <td>Strength</td>
              <td>{getStr(hero2.powerstats.strength)}</td>
            </tr>
            <tr>
              <td>{getStr(hero1.powerstats.speed)}</td>
              <td>Speed</td>
              <td>{getStr(hero2.powerstats.speed)}</td>
            </tr>
            <tr>
              <td>{getStr(hero1.powerstats.durability)}</td>
              <td>Durability</td>
              <td>{getStr(hero2.powerstats.durability)}</td>
            </tr>
            <tr>
              <td>{getStr(hero1.powerstats.power)}</td>
              <td>Power</td>
              <td>{getStr(hero2.powerstats.power)}</td>
            </tr>
            <tr>
              <td>{getStr(hero1.powerstats.combat)}</td>
              <td>Combat</td>
              <td>{getStr(hero2.powerstats.combat)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
