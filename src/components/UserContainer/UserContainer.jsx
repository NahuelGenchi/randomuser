import { useEffect, useState } from "react";
import { User } from "../index";

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
      <User userData={userData} />
    </div>
  );
};

export default UserContainer;