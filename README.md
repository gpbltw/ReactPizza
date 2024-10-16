# Интернет-магазин пиццерии на ReactJS

## Описание

Веб-приложение пиццерии, разработанное с использованием самых современных frontend-технологий на момент создания. Приложение реализует множество функций, необходимых для работы современных онлайн-сервисов.

## Функционал

- Поиск

![image](https://github.com/user-attachments/assets/c0e42fa4-6450-468a-a7df-600e8eac174f)


Для оптимизации поиска и предотвращения мгновенной перерисовки элементов при каждом изменении в поисковой строке, используется **debounce**. Кроме того, поиск и отображение результатов происходит только при вводе не менее двух символов.

![image](https://github.com/user-attachments/assets/5edf09c3-5faa-40ce-86e3-1b1bf6c0855b)


Если пользователь пытается найти пиццу, которой нет в наличии, отображается соответствующее сообщение.

![image](https://github.com/user-attachments/assets/72779c05-99aa-444c-bd70-589a98fd474a)


По клику на иконку крестика поле поиска очищается.

- Фильтрация
  
![image](https://github.com/user-attachments/assets/17bf4c63-1469-4714-bc95-94d0bf4b9de2)

(Названия категорий в примере условны и могут отличаться от реальных категорий)

![image](https://github.com/user-attachments/assets/6328d345-1616-4c89-b495-cd55cd0f7a3f)

![image](https://github.com/user-attachments/assets/fd245ff3-2343-458f-b20d-987b327b79f5)

- Сортировка

![image](https://github.com/user-attachments/assets/0045ad27-a960-44af-b4e4-451e6cebfe05)

![image](https://github.com/user-attachments/assets/5e1e1d29-c6de-4cd6-9325-b8e20f081245)

- Типизация

![image](https://github.com/user-attachments/assets/42b8781d-4a34-4526-949c-9f49b74c5f1f)

![image](https://github.com/user-attachments/assets/5b7361b1-056c-444d-a1a6-534dd4f0b527)

![image](https://github.com/user-attachments/assets/e8493e41-46b5-4749-b5ba-fd050b96c709)

- Пагинация

Приложение поддерживает разбивку результатов на страницы для удобства навигации по каталогу.

![image](https://github.com/user-attachments/assets/70045324-d465-454c-9dd3-69cc375e8a46)

![image](https://github.com/user-attachments/assets/e3cd14b0-3af5-4bdd-bc94-495ace5123da)

- Корзина

Корзина включает в себя множество полезных функций: счетчики товаров, кнопки увеличения, уменьшения и удаления позиций, кнопку для очистки корзины (с подтверждением через alert), динамический подсчет общей суммы заказа, а также хранение данных в localStorage. Это позволяет сохранить содержимое корзины даже после обновления страницы.

![image](https://github.com/user-attachments/assets/e76e86f5-0b40-4cda-b6b6-6daa453e69e8)

## Технологии
- ReactJS 18
- TypeScript
- Redux Toolkit (хранение данных / пицц)
- React Router v6 (навигация)
- Axios + Fetch (отправка запроса на бэкенд)
- React Hooks (хуки)
- Prettier (форматирование кода)
- CSS-Modules / SCSS (стилизация)
- React Content Loader (скелетон)
- React Pagination (пагинация)
- Lodash.Debounce
- Code Splitting, React Loadable, useWhyDidYouUpdate


