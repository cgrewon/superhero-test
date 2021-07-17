import React from "react";
import HeroItem from "../../components/heroItem/HeroItem";
import Api from "../../utils/api";

import "./search.scss";
import Loader from "../../assets/loader.svg";
import UpIcon from "../../assets/up.svg";

import CompTable from "../../components/compTable/compTable";
import { useSelector, useDispatch } from "react-redux";
import {
  setResult,
  setSelHero,
  setKeyword,
  setSelHeroes,
  addHistory,
} from "../../store/searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.search.results);

  const keyword = useSelector((state) => state.search.keyword);

  let params = window.location.href.split("/");
  let key = params && params.length === 5 ? params[params.length - 1] : null;
  // const { key } = useParams();

  const [isLoading, setIsLoading] = React.useState(false);

  //   const [selHeroes, setSelHeroes] = React.useState([]);
  const selHeroes = useSelector((state) => state.search.selHeroes);
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (key) {
      handleSearch();
    }
  }, []);

  React.useEffect(() => {
    if (selHeroes && selHeroes.length === 2) {
      handleCompare();
    }
  }, [selHeroes]);
  const handleClick = (hero) => {
    dispatch(setSelHero(hero));
    document.location.href = "/detail/" + hero.id;
  };

  const handleScroll = (e) => {
    if (window.scrollY > 100 && !showTopBtn) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const handleCompare = () => {
    const rect = document
      .getElementById("compContainer")
      .getBoundingClientRect();

    console.log("rect : ", rect);
    window.scrollTo({
      top: rect.y + window.scrollY,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleChangeKeyword = (e) => {
    dispatch(setKeyword(e.target.value));
  };

  const handleClear = (e) => {
    dispatch(setKeyword(""));
    dispatch(setResult([]));
    dispatch(setSelHeroes([]));
  };

  const handleSearch = (e) => {
    if (e) {
      e.preventDefault();
    }

    let val = document.getElementById("searchName").value;
    if (!val) {
      alert("Please enter keyword for hero name.");
      return;
    }
    setIsLoading(true);
    Api.search(val)
      .then((data) => {
        //   setHeroes(data);
        dispatch(setKeyword(val));
        dispatch(setResult(data));
        setIsLoading(false);

        const history = {
          keyword: val,
          count: data.length,
        };
        dispatch(addHistory(history));
      })
      .catch((err) => {
        console.log(err);
        alert(err.error);
        dispatch(setResult([]));
        const history = {
          keyword: val,
          count: 0,
        };
        dispatch(addHistory(history));
        setIsLoading(false);
      });
  };

  const handleSelect = (hero, isSelected) => {
    if (isSelected) {
      let newHeroes = selHeroes.filter((aHero) => aHero.id !== hero.id);
      dispatch(setSelHeroes(newHeroes));

      return;
    }
    let newHeroes = selHeroes ? [hero, ...selHeroes] : [hero];
    if (newHeroes.length > 2) {
      newHeroes.pop();
    }
    dispatch(setSelHeroes(newHeroes));
  };

  const hero1 = selHeroes && selHeroes.length > 0 ? selHeroes[0] : null;
  const hero2 = selHeroes && selHeroes.length > 1 ? selHeroes[1] : null;

  return (
    <div className="container">
      <h1 className="title">Find Super Hero Here!</h1>
      <div className="searchBox">
        <form onSubmit={(e) => handleSearch(e)}>
          <div className="row">
            <input
              type="text"
              id="searchName"
              className="shadow"
              placeholder="Enter hero name ..."
              value={keyword}
              onChange={(e) => {
                handleChangeKeyword(e);
              }}
            />
            <a
              className={isLoading ? "d-none" : "btn btnSearch shadow"}
              onClick={(e) => handleSearch(e)}
            >
              Search
            </a>

            <div className={isLoading ? "loader" : "d-none"}>
              <img src={Loader} />
            </div>
            <a
              className={isLoading ? "d-none" : "btn btnSearch shadow"}
              onClick={(e) => handleClear(e)}
            >
              Clear
            </a>
          </div>
        </form>
      </div>

      <div className="exp-head">
        <span className="found-count">
          Found {heroes.length} heroes ( Select 2 heroes to compare power states
          )
        </span>
      </div>
      <div className="searchResult">
        {heroes.map((hero, index) => {
          const isSelected =
            (hero1 && hero1.id == hero.id) || (hero2 && hero2.id == hero.id);
          return (
            <HeroItem
              showSelector={true}
              selected={isSelected}
              key={index}
              hero={hero}
              onClick={() => handleClick(hero)}
              onSelect={() => handleSelect(hero, isSelected)}
            />
          );
        })}
      </div>

      {hero1 && hero2 ? (
        <CompTable
          hero1={hero1}
          hero2={hero2}
          onReset={() => {
            dispatch(setSelHeroes([]));
          }}
        />
      ) : null}
      <div
        className={
          !showTopBtn ? "btn-scrollToTop-hide" : "btn-scrollToTop shadow"
        }
        onClick={handleToTop}
      >
        <img src={UpIcon} />
      </div>
    </div>
  );
}
