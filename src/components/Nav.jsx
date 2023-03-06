import styles from "./Nav.module.css";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function Nav() {
  return (
    <nav id={styles.nav}>
      <button className="btnCircle">
        <FaGithub className="iconBtn" />
      </button>

      <button className="btnCircle">
        <FaLinkedin className="iconBtn" />
      </button>

      <button className="btnCircle">
        <FaEnvelope className="iconBtn" />
      </button>
    </nav>
  );
}
