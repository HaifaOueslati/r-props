import React from "react";
import PropTypes from "prop-types";
import hela from "./flower.jpeg";

const Profile = (props) => {
  return (
    <div>
      <div>{props.children}</div>

      <h1 style={{color: "purple"}}>Full name: {props.fullName}</h1>

      <h1 style={{color: "purple"}}>Bio: {props.bio}</h1>

      <h1 style={{color: "purple"}}>Profession: {props.profession}</h1>

      <button style={{backgroundColor: "red"}} onClick={() => props.handleName(`My name is Haifa Oueslati`)}>
        clickHere
      </button>
    </div>
  );
};
Profile.defaultProps = {
    fullName: "Hela Oueslati",
    bio: "bio",
    profession: "sales manager",
    handleName: () => alert("Hela Oueslati"),
    children: <img style={{width: 350}} src={hela} alt='hela' />


}

Profile.propTypes = {

  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func
   };
export default Profile;
