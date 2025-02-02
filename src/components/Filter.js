import React from "react";

function Filter({search, onSearchChange, handleCategoryChange }) {

  function handleSearchChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input 
      onChange={handleSearchChange}
      value={search}
      type="text" 
      name="search" 
      placeholder="Search..." />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
