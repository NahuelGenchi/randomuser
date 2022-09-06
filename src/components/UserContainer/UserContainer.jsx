import { useEffect, useState } from "react";

import "./UserContainer.scss";

const UserContainer = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
    .then(data => data.json())
    .then(data => {
      setUserData(data.results[0]);
    })
  }, []);

  console.log(userData);

  return(
    <div className="user-bcontainer">
      <div className="user-container">
        <div>Gender: {userData.gender}</div>
      </div>
    </div>
  );
};

export default UserContainer;