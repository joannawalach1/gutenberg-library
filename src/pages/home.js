import React from 'react'
import Sidebar from '../components/Sidebar';
import BooksLists from "./../components/BookLists"

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="home1">
        <BooksLists />
        </div>
    </div>
  )
}

export default Home