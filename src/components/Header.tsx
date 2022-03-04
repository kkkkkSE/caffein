// eslint-disable-next-line
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div className="wrap"></div>
    </Container>
  );
};

const Container = styled.div`
  .wrap {
    width: 960px;
    height: 60px;
    margin: 0 auto;
    background-color: #aff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export default Header;
