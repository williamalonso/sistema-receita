import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import StyledLogo from './components/StyledComponents/StyledLogo';
import { GiKnifeFork } from 'react-icons/gi';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container className="mt-5 d-flex justify-content-start align-items-center flex-wrap">
        <StyledLogo to={'/'}>
          <GiKnifeFork style={{fontSize:'2rem'}}></GiKnifeFork>
          Início
        </StyledLogo>
      </Container>
      <Search></Search>
      <Category></Category>
      <Pages />
    </>
  );
}

export default App;
