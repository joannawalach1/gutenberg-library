import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouriteBooks from "./pages/favouriteBooks";
import Home from "./pages/home";
import Search from "./pages/search";
import Categories from "./pages/categories";
import Books from "./pages/books";
import MyShelf from "./pages/myShelf";
import './scss/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route exact path="/books" element={<Books />}></Route>
        <Route exact path="/favourites" element={<FavouriteBooks />}></Route>
        <Route exact path="/myshelf" element={<MyShelf />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
