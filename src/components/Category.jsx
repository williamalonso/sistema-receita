import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import { whiteColor } from "./StyledComponents/StyledGlobal";

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  margin-right: 2rem;

  h4 {
    color: ${whiteColor};
    font-size: 0.8rem;
  }
  svg {
    color: ${whiteColor};
  }

  &.active, &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

function Category() {

  const location = useLocation();
  return(
    <Container className="mb-5 mt-5 d-flex justify-content-center align-items-center flex-wrap">
        <StyledLink to={'/cuisine/italian'} className={location.pathname === '/cuisine/italian' ? 'active' : ''}>
          <div className="d-flex justify-content-around align-items-center flex-column">
              <FaPizzaSlice />
              <h4 className="mt-2">Italiano</h4>
          </div>
        </StyledLink>
        <StyledLink to={'/cuisine/american'} className={location.pathname === '/cuisine/american' ? 'active' : ''}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <FaHamburger />
            <h4 className="mt-2">Americano</h4>
          </div>
        </StyledLink>
        <StyledLink to={'/cuisine/thai'} className={location.pathname === '/cuisine/thai' ? 'active' : ''}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <GiNoodles />
            <h4 className="mt-2">Tailandês</h4>
          </div>
        </StyledLink>
        <StyledLink to={'/cuisine/japanese'} className={location.pathname === '/cuisine/japanese' ? 'active' : ''}>
          <div className="d-flex justify-content-around align-items-center flex-column">
            <GiChopsticks />
            <h4 className="mt-2">Japonês</h4>
          </div>
        </StyledLink>
    </Container>
  );
}

export default Category;