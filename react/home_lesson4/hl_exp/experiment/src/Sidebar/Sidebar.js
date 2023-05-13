import articles from "../data/articles.json";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebarDiv">
      <p>Here will be the Sidebar:</p>
      <nav>
        <ul>
          {articles.map((item) => 
            <li key={item.title}>
              <a href={item.href} alt={item.title}>
                {item.title}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
