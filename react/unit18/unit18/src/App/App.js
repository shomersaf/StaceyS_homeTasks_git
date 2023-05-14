
import './App.css';
let z=4;
const d =[5,6,7];
const c ={'background':'orangered'};
const b='yellow';
const f = {"one": 100, "two": 200};
const fd = Object.keys(f);

function App() {
  return (
 
   <div className="container">
<h1>Основные конструкции JSX -unit 18</h1>
<h2>Вывод переменной</h2>
<div>Переменная z: {z}</div>
<div>z*8={z*8}</div>
<div>А как вывести скобки? {"{}"}</div>
<h2>Вывод массива</h2>
<div>{d}</div>
<div>{d.join(' ')}</div>
<h3>Array methods</h3>
<div>{d.map(item=>item + ' ')}</div>
<h3>Array methods - creating elements</h3>
<div>{d.map(item=><p key={item}>{item}</p>)}</div>
<h2 style={c}>Inline Styles</h2>
<h2 style={{color: b, background:'black'}}>Inline Styles2</h2>
<h2>Вывести объект напрямую нельзя, поэтому выводим ключи в массив и перебираем полученный массив</h2>
<div>{Object.keys(f).map(item => item  + ' ' +f[item] +' ')}</div>
<ul>
    {fd.map(item=><li key={item}>{item + ': ' +f[item]}</li>)}
</ul>
<h2>Creating elements from array</h2>
<p>{d.map((item,index)=><span key={index} id = {item}>{item}</span>)}</p>
<hr />


   </div>
   
  
  );
}

export default App;