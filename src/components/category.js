import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [category, setCategory] = useState([]);
  const fetchCategories = () => {
    axios
      .get(`https://gnikdroy.pythonanywhere.com/api/bookshelf`)
      .then((response) => {
        setCategory(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchCategories();
  }, [Category])


  return (
    <div className="category">
      <div><h3>Categories</h3></div>
      <div className="category__wrapper">
        {category && category.map((cat) => (
          <div className="category__tile" key={cat.id}>{cat.name}</div>
        ))}


      </div></div>
  )
}

export default Category