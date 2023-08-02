import store from './store';
import Pages from './pages/Pages';
import Popular from './components/Popular';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <Pages></Pages>
        <Popular></Popular>
    </Provider>
  );
}

export default App;
