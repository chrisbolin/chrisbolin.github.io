import { Main, Make, Talk, Work } from "../../content";

export default function SimpleApp() {
  return (
    <div className="SimpleApp">
      <h1>Chris Bolin</h1>
      <p className="main">
        <Main />
      </p>
      <h2>Projects</h2>
      <p>
        <Make />
      </p>
      <h2>Press and Talks</h2>
      <p>
        <Talk />
      </p>
      <h2>CV</h2>
      <p>
        <Work />
      </p>
    </div>
  );
}
