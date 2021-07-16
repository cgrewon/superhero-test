import React from "react";
import "./history.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeHistory,
  setResult,
  setKeyword,
  setSelHeroes,
} from "../../store/searchSlice";
import XMark from "../../assets/x-mark.svg";

function History() {
  const histories = useSelector((state) => state.search.history);
  const dispatch = useDispatch();
  const handleDelete = (e, index) => {
    e.stopPropagation();
    dispatch(removeHistory(index));
  };
  const handleClick = (history) => {
    dispatch(setResult([]));
    dispatch(setKeyword(history.keyword));
    dispatch(setSelHeroes([]));
    window.location = "/search/" + history.keyword;
  };
  return (
    <div className="container details history">
      <div className="title">History </div>

      <div className="exp-head"></div>

      <div id="compContainer" className="exp-head comp">
        <div className="row">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Keyword</th>
                <th>Number of Heroes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {histories &&
                histories.map((history, index) => {
                  return (
                    <tr onClick={() => handleClick(history)}>
                      <td>{index + 1}</td>
                      <td>{history.keyword}</td>
                      <td>{history.count}</td>
                      <td>
                        <div
                          className="btn-del"
                          onClick={(e) => handleDelete(e, index)}
                        >
                          <img src={XMark} width={30} alt="hero" />
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
