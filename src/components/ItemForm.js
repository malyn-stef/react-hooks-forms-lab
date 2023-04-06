import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [formValue, setFormValue] = useState('')
  const [selectValue, setSelectValue] = useState('Produce')


  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: formValue,
    category: selectValue

  };
  console.log(newItem)
  function setSelectValueFun(e) {
    setSelectValue(e)

  }
  function setFormValueFun(e) {
    setFormValue(e)
  }


  function handleSubmit(event) {
    event.preventDefault()
    console.log(newItem)
    onItemFormSubmit(newItem)

  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={formValue} onChange={(e) => setFormValueFun(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={selectValue} onChange={(e) => setSelectValueFun(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={handleSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
