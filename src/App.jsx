import store from './store';
import Pages from './pages/Pages';
import { Provider } from 'react-redux';
import StyledGlobal from './components/StyledComponents/StyledGlobal';
import Category from './components/Category';

function App() {
  return (
    <Provider store={store}>
      <StyledGlobal />
      <Category />
      <Pages />
    </Provider>
  );
}

export default App;
