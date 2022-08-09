import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectStaff } from "./app/loginSlice";

const MyNav = () => {
  const staff = useSelector(selectStaff);
  return (
    <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
      <Link className="btn btn-success" to="/login">
        login
      </Link>
      | <Link to="/note">Notes</Link>| <Link to="/categories">categories</Link>|{" "}
      {staff && <Link to="/deletedata">DELETE</Link>}|{" "}
    </nav>
  );
};

export default MyNav;
