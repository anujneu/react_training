import profilePic from "./assets/react.svg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile-pic"></img>
      <h2 className="card-title">React</h2>
      <p className="card-text">
        React is a javaScript library. It is mostly used in web development.
      </p>
    </div>
  );
}

export default Card;
