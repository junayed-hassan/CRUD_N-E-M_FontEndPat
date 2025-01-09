import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul className="flex gap-4 mx-auto my-3 text-xl font-semibold w-96">
        <li>
          <Link to={"./"}>Home</Link>
        </li>
        <li>
          <Link to={"./login"}>Login</Link>
        </li>
        <li>
          <Link to={"./register"}>Register</Link>
        </li>
        <li>
          <Link to={"./users"}>Users</Link>
        </li>
      </ul>
    </>
  );
}
