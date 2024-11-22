import React, { useState } from "react";

const sampleMenu = [
  { id: 1, name: "Burger", category: "Main Course", price: 8.99 },
  { id: 2, name: "Fries", category: "Starters", price: 3.99 },
  { id: 3, name: "Ice Cream", category: "Desserts", price: 4.99 },
];

function Menu() {
  const [category, setCategory] = useState("All");

  const filteredMenu =
    category === "All"
      ? sampleMenu
      : sampleMenu.filter((item) => item.category === category);

  return (
    <div>
      <h2>Menu</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Starters">Starters</option>
        <option value="Main Course">Main Course</option>
        <option value="Desserts">Desserts</option>
      </select>
      <ul>
        {filteredMenu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
