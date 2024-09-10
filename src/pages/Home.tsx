import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import Categories from "../components/categories/Categories";
import Sort, { SortItem } from "../components/sort/Sort";
import PizzaCard from "../components/pizzaCard/PizzaCard";
import Skeleton from "../components/pizzaCard/Skeleton";
import Pagination from "../components/paginaton/Pagination";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import {
  changeCategory,
  changeSort,
  changeCurrentPage,
  setFilters,
  filterSliceState,
} from "../redux/slices/filterSlice";
import { useSelector } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import { RootState, useAppDispatch } from "../redux/Store";

export const Home: React.FC = () => {
  const [error, setError] = useState(null);

  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );
  const { items, status } = useSelector((state: RootState) => state.pizza);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const search = searchValue ? `&search=${searchValue}` : "";

  const getPizzas = async () => {
    if (searchValue && searchValue.length < 2) {
      return;
    }

    setError(null); // Сброс ошибки перед новым запросом

    dispatch(
      fetchPizzas({
        categoryId,
        sort,
        currentPage: String(currentPage),
        search,
      })
    );
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as filterSliceState;

      dispatch(
        setFilters({
          ...params,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, searchValue, currentPage]);

  const onClickCategory = React.useCallback(
    (i: number) => dispatch(changeCategory(i)),
    []
  );

  const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort
          value={sort}
          onClickSort={(i: SortItem) => dispatch(changeSort(i))}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div
          className="content_
        error-info"
        >
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, пиццы не найдены, попробуйте зайти позже</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? (
            skeletons
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            pizzas
          )}
        </div>
      )}

      <Pagination
        value={currentPage}
        onChangePage={(number: number) => dispatch(changeCurrentPage(number))}
      />
    </>
  );
};

export default Home;
