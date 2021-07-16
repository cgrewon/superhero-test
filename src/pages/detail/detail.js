import React from "react";

import "./detail.scss";
import DefImg from "../../assets/def.png";

import { useSelector } from "react-redux";

function Detail() {
  const hero = useSelector((state) => state.search.selHero);

  const [avatar, setAvatar] = React.useState(
    hero && hero.image && hero.image.url ? hero.image.url : DefImg
  );

  if (!hero) {
    return null;
  }

  return (
    <div className="container details">
      <div className="title">{hero ? hero.name : "-"}'s Detail</div>

      <div className="exp-head"></div>

      <div id="compContainer" className="exp-head comp">
        <div className="row">
          <div>
            <img
              src={avatar}
              alt="hero photo"
              width={400}
              onError={(e) => {
                setAvatar(DefImg);
              }}
            />
          </div>
          <div>
            <table cellSpacing={0}>
              <tbody>
                <tr>
                  <td colSpan="2" className="cell-head">
                    PowerStats
                  </td>
                </tr>
                <tr>
                  <td>Intelligence</td>
                  <td>{hero.powerstats.intelligence}</td>
                </tr>
                <tr>
                  <td>Strength</td>
                  <td>{hero.powerstats.strength}</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>{hero.powerstats.speed}</td>
                </tr>
                <tr>
                  <td>Durability</td>
                  <td>{hero.powerstats.durability}</td>
                </tr>
                <tr>
                  <td>Power</td>
                  <td>{hero.powerstats.power}</td>
                </tr>
                <tr>
                  <td>Combat</td>
                  <td>{hero.powerstats.combat}</td>
                </tr>
                <tr>
                  <td colSpan="2" className="cell-head">
                    Biography
                  </td>
                </tr>
                <tr>
                  <td>Full Name</td>
                  <td>{hero.biography["full-name"]}</td>
                </tr>
                <tr>
                  <td>Alter-Egos</td>
                  <td>{hero.biography["alter-egos"]}</td>
                </tr>
                <tr>
                  <td>Place of birth</td>
                  <td>{hero.biography["place-of-birth"]}</td>
                </tr>
                <tr>
                  <td>First Appearance</td>
                  <td>{hero.biography["first-appearance"]}</td>
                </tr>
                <tr>
                  <td>Publisher</td>
                  <td>{hero.biography["publisher"]}</td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>{hero.biography["alignment"]}</td>
                </tr>

                <tr>
                  <td colSpan="2" className="cell-head">
                    Appearance
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{hero.appearance["gender"]}</td>
                </tr>
                <tr>
                  <td>Race</td>
                  <td>{hero.appearance["race"]}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    {hero.appearance["height"][0]}
                    {",  "}
                    {hero.appearance["height"][1]}
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{hero.appearance["weight"][1]}</td>
                </tr>
                <tr>
                  <td>Eye Color</td>
                  <td>{hero.appearance["eye-color"]}</td>
                </tr>
                <tr>
                  <td>Hair Color</td>
                  <td>{hero.appearance["hair-color"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
