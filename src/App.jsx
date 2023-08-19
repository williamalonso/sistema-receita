import store from './store';
import Pages from './pages/Pages';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
}

export default App;
