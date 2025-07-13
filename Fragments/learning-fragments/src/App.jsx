import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App(){

  let foodItems = ['Dal', 'Rice', 'Vegetables', 'Fruits', 'Nuts'];
  return  (
    <>
      <h1>Healthy Food</h1>
  <ul className="list-group">
  {foodItems.map(item => (
    <li className="list-group-item" key={item}>{item}</li>
  ))}
</ul>
</>

)}
export default App;