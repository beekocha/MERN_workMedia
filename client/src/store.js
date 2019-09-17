import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

/*https://github.com/rajdee/redux-in-russian/blob/master/docs/api/applyMiddleware.md - russ version
В данном случае, я экспортирую функцию CreateStore (createStore(reducer, [preloadedState], [enhancer])
Creates a Redux store that holds the complete state tree of your app.
There should only be a single store in your app.)

and applyMiddleWare - Mидлвар позволяет вам обернуть метод хранилища dispatch для пользы и дела.
Ключевой особенностью мидлвара является то, что они компонуемы. 
Несколько мидлваров можно объединить вместе, где каждый мидлвар не должен знать, что происходит до или после него в цепочке. 

Thunk - Например, redux-thunk позволяет генераторам действий инвертировать управление вызывая функции. 
Они будут получать dispatch как аргумент и могут вызывать его асинхронно. 
Такие функции называются преобразователями (thunks).*/

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;