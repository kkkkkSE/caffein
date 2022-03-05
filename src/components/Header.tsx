// eslint-disable-next-line
import styled from "styled-components";
import colors from "../styles/color";

const Header = () => {
  return (
    <Container>
      <div className="headerWrap">
        <span className="logo">로고</span>
        <div className="myPage"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${colors.White};
  width: 100%;

  .headerWrap {
    box-sizing: border-box;
    width: 960px;
    height: 60px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
  }
  .myPage {
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }
`;
export default Header;
