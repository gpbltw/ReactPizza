// App.tsx
import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/Store";
import { changeSearchValue } from "./redux/slices/filterSlice";

function App() {
  // Получение значений из Redux
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );

  // Функция для обновления значения поиска
  const setSearchValue = (value: string) => {
    dispatch(changeSearchValue(value));
  };

  return (
    <div className="wrapper">
      {/* Передаем searchValue и setSearchValue в Header */}
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
