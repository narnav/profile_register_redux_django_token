import axios from "axios";

const URL = "http://127.0.0.1:8000/api/notes/";
const ADD_URL = "http://127.0.0.1:8000/api/addnote/";
// async(2)
export function getNotes(token) {
  return new Promise((resolve) =>
    axios(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => resolve({ data: res.data }))
  );
}

export function addNote(token, bodyy) {
  console.log("token", token);
  console.log("body", bodyy);
  return new Promise((resolve) =>
    axios
      .post(
        ADD_URL,
        { bodyy: bodyy },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => resolve({ data: res.data }))
  );
}
