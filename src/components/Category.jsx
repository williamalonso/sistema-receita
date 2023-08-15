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
        <div>
          <Link to={'/italian'}>
            <FaPizzaSlice />
            <h4>Italiano</h4>
          </Link>
        </div>
        <div>
          <FaHamburger />
          <h4>Americano</h4>
        </div>
        <div>
          <GiNoodles />
          <h4>Thailandês</h4>
        </div>
        <div>
          <GiChopsticks />
          <h4>Japonês</h4>
        </div>
      </List>
    </StyledWrapper>
  );
}

export default Category;