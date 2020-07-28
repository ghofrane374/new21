import React from "react";
import ProfileComponent from "./Profile/Profile component";
import "./App.css";
function App() {
  const handleName = () => {
    alert("ghofrane akrout");
  };
  return (
    <div>
      <ProfileComponent
        fullName="ghofrane akrout"
        Profession="enseignante"
        bio="j'enseigne depuis 5 ans dans une école privée"
        children={<img src="ghofrane.jpg" className="photo" />}
        handleName={handleName}
      />
    </div>
  );
}
export default App;
