import "./User.scss";

const User = (props) => {
  const { cell, dob, email, gender, location, login, name, nat, phone, picture } = props.userData;

  return(
    <div className="user-container">
      <div className="uc-img">
        <img src={picture?.medium} alt="Profile" />
      </div>
      <div className="uc-info">
        <div className="uci-name">{name?.first} {name?.last}</div>
        <div className="uci-location">
          <div>{location?.city}, {location?.country}</div>
          <div>{location?.street.name} {location?.street.number}</div>
        </div>
        <div className="uci-contact">
          <div className="ucic-cell">
            <ion-icon name="phone-portrait-outline"></ion-icon>
            <div>{cell}</div>
          </div>
          <div className="ucic-phone">
            <ion-icon name="call-outline"></ion-icon>
            <div>{phone}</div>
          </div>
          <div className="ucic-email">
            <ion-icon name="mail-outline"></ion-icon>
            <div>{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;