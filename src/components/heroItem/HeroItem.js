import React from "react";
import "./Heroitem.scss";
import icoCheck from "../../assets/ico-check.svg";
import DefImg from "../../assets/def.png";
function HeroItem({
  hideDesc = false,
  selected = false,
  showSelector = false,
  hero = {},
  onSelect,
  onClick,
}) {
  const [avatar, setAvatar] = React.useState(
    hero && hero.image && hero.image.url ? hero.image.url : DefImg
  );
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(e);
    }
  };

  // const img = hero && hero.image && hero.image.url ? hero.image.url : DefImg;
  return (
    <div className="heroItem" onClick={(e) => handleClick(e)}>
      <div className="item-container">
        <img
          src={avatar}
          alt="hero"
          onError={(e) => {
            setAvatar(DefImg);
          }}
        />
        {!hideDesc ? (
          <div className="row heroDesc">
            <div className="heroName">{hero.name}</div>
            <div className="heroId">#{hero.id}</div>
          </div>
        ) : null}
        {showSelector ? (
          <div
            className={selected ? "selector selected" : "selector"}
            onClick={(e) => handleSelect(e)}
          >
            <img src={icoCheck} className="svg-check" alt="hero" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HeroItem;
