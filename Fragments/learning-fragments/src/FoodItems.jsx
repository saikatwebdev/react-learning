import Item from "./Item";
const FoodItems = () => {
  let foodItems = [
    { name: 'dal', description: 'A lentil dish' },
    { name: 'rice', description: 'Steamed rice' }
  ];
  return (
      <ul className="list-group">
      {foodItems.map((item) => (
        <li className="list-group-item" key={item.name}>
          <Item name={item.name} description={item.description} />
        </li>
      ))}
    </ul>
  );
}

export default FoodItems;