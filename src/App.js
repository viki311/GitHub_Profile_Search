import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  let [name, setName] = useState("");
  let [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((res) => {
        console.log(res.status);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
    setUser(null);
  }, [name]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {user == null ? (
        <h1>User Not Found</h1>
      ) : (
        <div>
          <h1>Name: {user.name}</h1>
          <img src={user.avatar_url} style={{ width: "200px" }} />
          <h1>Followers: {user.followers}</h1>
          <h1>Following: {user.following}</h1>
          <a href={user.html_url} target="_blank">
            Link to my account
          </a>
        </div>
      )}
    </div>
  );
};
export default App;
