import React from "react";
import PropTypes from "prop-types";

function ProfileComponent(props) {
  console.log(props);
  return (
    <div>
      <div className="titre">bonjour je m'appelle {props.fullName}</div>
      <div className="profes">*je suis une {props.Profession}*</div>
      <div className="pres">*{props.bio}*</div>
      {props.children}
      props.handleName()
    </div>
  );
}

ProfileComponent.defaultProps = {
  fullName: "raghda 7arbewi",
};
ProfileComponent.propTypes = { fullName: PropTypes.string };
export default ProfileComponent;
