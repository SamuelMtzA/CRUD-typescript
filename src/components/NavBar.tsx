import logo from "../favicon.svg";

interface Props {
  title?: string;
}
export const NavBar = ({ title }: Props) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="conatiner">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="react logo" style={{ width: "4rem" }} />
            {title && <span className="text-white">{title}</span>}
          </a>
        </div>
      </nav>
    </>
  );
};
