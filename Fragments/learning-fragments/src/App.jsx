import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./FoodItems";
import ErrorMsg from "./ErrorMsg";
function App() {

let foodItems = ['dal', 'rice'];

  return (
    <div>
     
      <div className="container mt-5">
        <h1 className="text-center">Food Items</h1>
        {foodItems.length > 0 ? (
          <FoodItems />
        ) : (
          <ErrorMsg>
            <p>Unable to load food items.</p>
          </ErrorMsg>
        )}
        
      </div>
      <footer className="text-center mt-5">
        <p>&copy; 2025 Food App</p>
      </footer>
    </div>
  );
}
export default App;
