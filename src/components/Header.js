import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white px-36 py-3">
      <div className="flex">
        <img
          src={Logo}
          alt="Abstract Logo"
          style={{ height: "40px", width: "40px" }}
          className="rounded-3xl"
        />
        <p className="mt-2 font-semibold pl-4">Abstract</p>
        <span className="mt-2 pl-1">|</span>
        <span className="mt-2 pl-1">
          <Link to="http://localhost:3001/">Help Center</Link>
        </span>
      </div>
      <div>
        <button className="border border-white py-1 px-4 rounded">
          <Link to="http://localhost:3001/">Submit a request</Link>
        </button>
      </div>
    </div>
  );
};
