import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typedName, setTypedName] = useState('')
  const [newItems, setNewItems] = useState(items)



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function typedNameChange(event) {
    setTypedName(event.target.value)
  }
  function onItemFormSubmit(item) {
    console.log(item)
    const newItemsArray = [...newItems, item]
    setNewItems(newItemsArray)
  }
  const itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All" && typedName === '') return true;

    return item.category === selectedCategory, item.name.includes(typedName);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={typedNameChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
