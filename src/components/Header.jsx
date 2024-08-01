import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" d-flex justify-content-between align-items-center p-3 border-bottom">
      <div>
        <Link to={'/'}>
        <img
          width={50}
          src="https://t4.ftcdn.net/jpg/06/58/52/69/360_F_658526949_OPtABJyZyniWxJKa4TTpVX1SwdRunSEq.jpg"
          alt=""
        />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to={"/"} className="btn btn-primary">
              Add
            </Link>
          </li>
          <li>
            <Link to={"/list"} className="btn btn-warning">
              List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
