import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import StyledWrapper from './StyledComponents/StyledWrapper';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const List = styled.div`
  display: flex;
  justify-content: center;
`;

function Category() {
  return(
    <StyledWrapper>
      <List>
        <Link to={'/cuisine/italiano'}>
          <div>
              <FaPizzaSlice />
              <h4>Italiano</h4>
          </div>
        </Link>
        <Link to={'/cuisine/americano'}>
          <div>
            <FaHamburger />
            <h4>Americano</h4>
          </div>
        </Link>
        <Link to={'/cuisine/tailandes'}>
          <div>
            <GiNoodles />
            <h4>Tailandês</h4>
          </div>
        </Link>
        <Link to={'/cuisine/japones'}>
          <div>
            <GiChopsticks />
            <h4>Japonês</h4>
          </div>
        </Link>
      </List>
    </StyledWrapper>
  );
}

export default Category;