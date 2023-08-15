import store from './store';
import Pages from './pages/Pages';
import { Provider } from 'react-redux';
import Category from './components/Category';
import Route from './Route';
import StyledGlobal from './components/StyledComponents/StyledGlobal';

function App() {
  return (
    <Provider store={store}>
      <StyledGlobal />
      <Route />
      <Category />
      <Pages />
    </Provider>
  );
}

export default App;
