
//import logo from "./logo.svg";
import "./App.css";
import CountriesDB from "./components/CountriesApp/CountriesDB";
import CountriesApp from "./components/CountriesApp";

function App() {
  return (
    <div className="cardsContainer">
              {CountriesDB.map((cObj) => {
          return (
            <CountriesApp
              cName={CountriesDB.name.common}
              cFlag={CountriesDB.flags.svg}
              cPopulation={CountriesDB.population}
            />
          );
        })}

      <div>
    <p>{`<span>Name: </span> ${CountriesDB.name.common}`}</p>
    <img src={CountriesDB.flags.svg} height = {200} width ={200} alt={CountriesDB.name.common}/>
    <h4>{`<span>Population: </span> ${CountriesDB.population}`}</h4>
</div>
    </div>  
  );
  }
export default App;
