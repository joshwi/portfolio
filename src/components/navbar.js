/* eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

  const [menu, SetMenu] = useState(false)

  return (
    <>
      <nav className="navbar navbar-default primary-bg d-sm-block d-md-none z-100">
        <div className="container-fluid">
          <Link key="home" className="txt secondary-text" to={"/"}><img src="/jw.svg" /></Link>
          <button className="btn primary-bg secondary-text" onClick={() => SetMenu(!menu)}>
            <i className={`bi bi-${menu ? "x-lg" : "list"} secondary-text`} style={{ fontSize: '2rem' }} />
          </button>
        </div>
      </nav>

      {menu && (
        <div className="menu d-sm-block d-md-none z-99">
            {props.tabs && props.tabs.map((entry) => {
              return (
                <Link className="txt" to={entry.link} onClick={() => SetMenu(!menu)}>
                  <button key={entry.key} className="btn btn-lg txt">
                    <div className="row">
                      <div className="col-3"><i className={`${entry.icon} secondary-text`} /></div>
                      <div className="col-auto f-12 center-div">{entry.header}</div>
                    </div>
                  </button>
                </Link>
              )
            })}
        </div>
      )}
    </>
  );
};



export default Sidebar;