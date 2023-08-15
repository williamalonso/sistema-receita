import store from './store';
import Pages from './pages/Pages';
import { Provider } from 'react-redux';
import StyledGlobal from './components/StyledComponents/StyledGlobal';

function App() {
  return (
    <Provider store={store}>
      <StyledGlobal />
      <Pages />
    </Provider>
  );
}

export default App;
