import store from './store';
import Pages from './pages/Pages';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <h1>Olá Mundo</h1>
        <Pages></Pages>
    </Provider>
  );
}

export default App;
