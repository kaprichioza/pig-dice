# pig-dice
Game pig-dice
Open [https://game-pig-dice.herokuapp.com/](https://game-pig-dice.herokuapp.com/) to view it in the browser.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To do
- [ ] Реализовать backend с использованием `express` или `koa` + `lowdb`
- [ ] Сгенерировать пользовательский токен, и положить в cookie
- [ ] Выполнить верстку страниц каталога и корзины по макету
- [ ] Реализовать логику взаимодействия между фронтом и бэкендом (добавление/удаление товаров, покупка)
------------------------------------------------------
REST API
Реализовать работу 4 методов: 
- [ ] `GET` /api/v1/cart/get
- [ ] `POST` /api/v1/cart/update
- [ ] `POST` /api/v1/cart/add?productId=12334 
- [ ] `POST` /api/v1/cart/delete?productId=12334 
------------------------------------------------------
`бонусная часть`
- [ ] Предусмотреть механизм работы кнопки “Оформить заказ” с отправкой данных на бекенд, и записью списка товаров, их количества и данных
ФИО, email, дату заказа на сервере
- [ ] Вывести список всех оформленных заказов на отдельной странице (mysite.ru/orders) - [ ] Каждый заказ должен содержать:
* UserId, ФИО, Email, Дату заказа
* Список купленных товаров
* Размер скидки
* Общую стоимость
* Если заказов более 10 предусмотреть пагинацию
* Предусмотреть поиск всех заказов по userId
- [ ] Размер скидки должен хранится в отдельной структуре базы данных (json) и рассчитываться из общей схемы скидок + дополнительная скидка
рассчитывается исходя из количества заказов
* от 2 заказов - 2%
* от 5 заказов - 5%
* от 10 заказов и более - 8%
## Done

- [x] Реализовать backend с использованием `express` или `koa` + `lowdb`
- [x] Сгенерировать пользовательский токен, и положить в cookie
- [x] Выполнить верстку страниц каталога и корзины по макету
- [x] Реализовать логику взаимодействия между фронтом и бэкендом (добавление/удаление товаров, покупка)
------------------------------------------------------
REST API
Реализовать работу 4 методов: 
- [x] `GET` /api/v1/cart/get
- [x] `POST` /api/v1/cart/update
- [x] `POST` /api/v1/cart/add?productId=12334 
- [x] `POST` /api/v1/cart/delete?productId=12334 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
