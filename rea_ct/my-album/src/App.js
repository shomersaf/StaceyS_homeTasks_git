
//import logo from "./logo.svg";
import "./App.css";
//import css from "./index.css"
import CountriesDB from "./components/CountriesApp/CountriesDB";
import CountriesApp from "./components/CountriesApp";


function App() {
  return (
    <div>
      <h1>Countries App</h1>

      <div className="cardsContainer">
     
     {CountriesDB.map((cObj) => {
 return (
   <CountriesApp
     cName={cObj.name?.common}
     cFlag={cObj.flags.svg}
     cPopulation={cObj.population}
   />
 );
})}

<div>
<p>{`Name:${CountriesApp.cName}`}</p>
<img src={CountriesApp.cFlag} height = {200} width ={200} alt={CountriesApp.name.common}/>
<h4>{`Population: ${CountriesApp.cPopulation}`}</h4>
</div>
</div> 
    </div> 
  );
  }
export default App;
