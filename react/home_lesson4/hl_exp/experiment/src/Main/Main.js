import articles from "../data/articles.json";
import "./Main.css";
function Main() {
  return (
    <div className="mainDiv">
      <p>Here will be the Main:</p>
      {articles.map((item) => 
        <section key={item.title}>
          <h2>{item.title}</h2>
          <div>{item.body}</div>
        </section>
      )}
    </div>
  );
}

export default Main;
