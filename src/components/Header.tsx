// eslint-disable-next-line
import { useState, useEffect } from "react";
import styled from "styled-components";
import { maxWidth } from "../styles/mixin";
import colors from "../styles/color";
import typo from "../styles/typo";

const Header = () => {
  const [downScroll, setDownScroll] = useState<boolean>(false);

  useEffect(() => {
    changeColor();
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor); //clean up
    };
  });

  const changeColor = () => {
    if (window.scrollY > 80 && !downScroll) {
      setDownScroll(true);
    } else if (window.scrollY <= 80 && downScroll) {
      setDownScroll(false);
    }
  };

  return (
    <Container downScroll={downScroll}>
      <div className="headerWrap">
        <h2 className={downScroll ? "logo primary" : "logo"}>caffein</h2>
        <div className="myPage">
          <img
            src={
              downScroll
                ? "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/icons/my-page-icon-black.png?raw=true"
                : "https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/icons/my-page-icon.svg?raw=true"
            }
            alt="마이페이지 이동"
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ downScroll: boolean }>`
  ${(props) => (props.downScroll ? `background-color: ${colors.White};` : ``)}
  position: fixed;
  top: 0;
  left: 0;
  color: ${colors.White};
  width: 100%;
  height: 60px;
  transition: background-color 0.5s;
  z-index: 100;

  h2 {
    ${typo.H2}
  }

  .headerWrap {
    ${maxWidth}
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-family: "Roboto Slab", serif;
    cursor: pointer;
  }
  .logo.primary {
    color: ${colors.Primary01};
  }

  .myPage {
    cursor: pointer;
  }
`;
export default Header;
