import React, { useState } from "react";

function Filter({ onSearchChange }) {
  const [formValue, setFormValue] = useState('')

  function searchItem(e) {

    setFormValue(e.target.value)

    onSearchChange(e)


  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder='Search...' value={formValue} onChange={e => searchItem(e)} />
      <select name="filter" >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
