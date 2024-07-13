import logo from "../../assets/Logo.svg";
import style from './header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="" />
    </header>
  );
}
