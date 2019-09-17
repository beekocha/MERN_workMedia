import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
/*Вспомогательная функция combineReducers преобразует объект, 
значениями которого являются различные функции редюсеры,
в одну функцию редюсер, которую можно передать в метод createStore.
Результирующий редюсер вызывает вложенные редюсеры и собирает их результаты в единый объект состояния. 
Состояние, созданное именами combineReducers(), сохраняет состояние каждого редуктора под их ключами,
переданные в combineReducers() */



export default combineReducers(
    {
        alert,
        auth,
        profile,
        post
    }
);