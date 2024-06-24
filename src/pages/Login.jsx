import "./Login.css";
import Nav from "@/components/Nav";
export default function Login() {
  return (
    <div className="col-md-12">
      <div className="col-md-12"><Nav/></div>
      <div className="col-md-4"></div><div className="col-md-4"><img src="/assets/Logo.webp"/></div><div className="col-md-4"></div>
      <div className="col-md-12 container">
      <div className="col-md-4"></div><div className="col-md-4 log">
        <h1>L O G I N</h1>
        <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">LOGIN</button></div>
      <div className="col-md-4"></div>
      
    </div></div>
  );
}
