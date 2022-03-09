// eslint-disable-next-line
import styled from "styled-components";
import { maxWidth } from "../styles/mixin";
import colors from "../styles/color";
import typo from "../styles/typo";
import myPageIcon from "../assets/image/icons/my-page-icon.svg";

const Header = () => {
  return (
    <Container>
      <div className="headerWrap">
        <h2 className="logo">caffein</h2>
        <div className="myPage">
          <img src={myPageIcon} alt="마이페이지 이동" />
        </div>
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
  height: 60px;

  h2 {
    ${typo.H2}
  }

  .headerWrap {
    ${maxWidth}
    height: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-family: "Roboto Slab", serif;
    cursor: pointer;
  }
  .myPage {
    cursor: pointer;
  }
`;
export default Header;
