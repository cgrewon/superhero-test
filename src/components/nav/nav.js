import React from "react";

import "./nav.scss";
import { useDispatch } from "react-redux";
import { setKeyword, setResult, setSelHeroes } from "../../store/searchSlice";

export default function Nav() {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setResult([]));
    dispatch(setKeyword(null));
    dispatch(setSelHeroes([]));
  };
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">
        <span className="logo-title">SuperHero</span>
      </div>
      <div className="space"></div>
      <div className="menu">
        <a href="/search" onClick={handleSearch}>
          Search
        </a>
        <a href="/history">History</a>
      </div>
    </nav>
  );
}
