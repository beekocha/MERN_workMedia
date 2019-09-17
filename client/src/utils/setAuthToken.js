import axios from 'axios';
//axios в данном  случае для обозначения "х-аус-токен" - для главного хедерс


//созданная функция принимает в качестве параметра токен. Который проверяется на наличие в localStorage, если таковой есть, то 
//соотвественно, он заменяет страку хедерс, если же нет, то удаляет
const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;