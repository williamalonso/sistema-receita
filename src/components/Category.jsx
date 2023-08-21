import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Category() {
  return(
    <Container className="mb-5 mt-5 d-flex justify-content-around align-items-center">
        <Link to={'/cuisine/italian'}>
          <div className="d-flex justify-content-around align-items-center flex-column">
              <FaPizzaSlice />
              <h4>Italiano</h4>
          </div>
        </Link>
        <Link to={'/cuisine/american'}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <FaHamburger />
            <h4>Americano</h4>
          </div>
        </Link>
        <Link to={'/cuisine/thai'}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <GiNoodles />
            <h4>Tailandês</h4>
          </div>
        </Link>
        <Link to={'/cuisine/japanese'}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <GiChopsticks />
            <h4>Japonês</h4>
          </div>
        </Link>
    </Container>
  );
}

export default Category;