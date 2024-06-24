import "./Nav.css";
import Link from "next/link";
export default function nav() {
  return (
    <div className="col-md-12">
      <div className="col-md-6"> LOGO</div>
      <div className="col-md-6 Header">
        <nav className="navbar">
          <Link className="navComp" href="#">HOME</Link>
          <Link className="navComp" href="#">NOTICE </Link>
          <Link className="navComp" href="#">ABOUT US</Link>
          <Link className="navComp" href="/Login">LOGIN</Link>
        </nav>
      </div>
    </div>
  );
}
