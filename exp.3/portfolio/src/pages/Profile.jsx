import profileImg from "../assets/profile.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <img src={profileImg} alt="Arnav Mishra" className="profile-img" />

      <h1>Arnav Mishra</h1>
      <h3>Student at Chandigarh University</h3>

      <p>
        AI & Machine Learning Enthusiast. Creator of Brain Nails AI and Lunar Crater Project.
      </p>
    </div>
  );
}
