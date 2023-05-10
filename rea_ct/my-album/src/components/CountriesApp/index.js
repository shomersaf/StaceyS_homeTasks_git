import css from "./style.module.css";

//flag, name, population
function CountriesApp(props){
const {cName, cFlag, cPopulation} = props;
if (!cFlag) return null;
return (
    <div className ={css.countriesCard}>
        <p>{`Name: ${cName}`}</p>
        <img src={cFlag} height = {200} width ={200} alt={cName}/>
        <h4>{`Population: ${cPopulation}`}</h4>
    </div>
)
}


 export default CountriesApp;