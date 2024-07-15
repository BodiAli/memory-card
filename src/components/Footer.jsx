import profileIcon from "../assets/profile-icon.svg";
import githubIcon from "../assets/github-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="github-container">
        <a href="https://github.com/BodiAli">
          <img src={profileIcon} alt="Visit profile" />
        </a>
        <a href="https://github.com/BodiAli/memory-card">
          <img src={githubIcon} alt="Visit github repository" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
