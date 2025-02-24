import { Link } from "react-router-dom";
import "./styles.css";

export default function HomeBody() {
  return (
    <>
      <p>You are in the Home Page</p>

      <Link to={"/formfilter"}>
        <p>Go ToFilter</p>
      </Link>
    </>
  );
}
