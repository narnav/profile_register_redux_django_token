import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doSigninAsync,
  selectEmail,
  selectUserName,
  logout,
  selectToken,
  doSignupAsync,
} from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);

  const [newUserName, setNewUserName] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [staff, setStaff] = useState(false);
  const [credit, setCredit] = useState(0);
  return (
    <div>
      {staff ? "true" : "false"}
      {/* {staff && "true"} */}
      {userName && <div>User name: {userName}</div>}
      {email && <div> Email: {email}</div>}
      {token && <div> token: {token}</div>}
      <hr />
      Login
      <button
        onClick={() =>
          dispatch(doSigninAsync({ username: newUserName, password: newPwd }))
        }
      >
        Login
      </button>
      <button
        onClick={() =>
          dispatch(
            doSignupAsync({
              username: newUserName,
              password: newPwd,
              email: newEmail,
              staff: staff,
              credit: credit,
            })
          )
        }
      >
        register
      </button>
      <button
        onClick={() => dispatch(logout({ id: 3, name: "dany", email: "aaa@" }))}
      >
        Logout
      </button>
      Name <input onChange={(e) => setNewUserName(e.target.value)} />
      Pwd <input onChange={(e) => setNewPwd(e.target.value)} type="password" />
      Email <input onChange={(e) => setNewEmail(e.target.value)} />
      credit <input onChange={(e) => setCredit(e.target.value)} />
      staff
      <input
        onChange={(e) => setStaff(e.target.checked)}
        type={"checkbox"}
      ></input>
    </div>
  );
};

export default Login;
