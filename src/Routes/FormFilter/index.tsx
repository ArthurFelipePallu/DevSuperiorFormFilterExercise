import { Link } from "react-router-dom";
import "./styles.css";

export default function FormFilter() {
  return (
    <>
      <form>
        <input type="text" placeholder="min value" />

        <input type="text" placeholder="max value" />
        <Link to={"/"}>
          <button type="submit">Procurar</button>
        </Link>
      </form>
    </>
  );
}
