/* eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

  return (
    <div className="sidebar d-none d-md-block center-div">
      <Link key="home" className="txt secondary-text" to={"/"}><img src="/jw.svg" /></Link>
      <nav>
        {props.tabs && props.tabs.map((entry) => {
          return <Link className="txt" key={entry.header} to={entry.link}><button key={entry.key} className="btn btn-lg primary-bg"><i className={entry.icon} /></button></Link>
        })}
      </nav>
    </div>
  );
};



export default Sidebar;