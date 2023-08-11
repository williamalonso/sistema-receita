import store from './store';
import Pages from './pages/Pages';
import Popular from './components/Popular';
import Veggie from './components/Veggie';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
        <Pages></Pages>
        <Veggie></Veggie>
        <Popular></Popular>
    </Provider>
  );
}

export default App;
