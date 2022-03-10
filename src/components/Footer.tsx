// eslint-disable-next-line
import styled from "styled-components";
import { maxWidth } from "../styles/mixin";
import colors from "../styles/color";
import typo from "../styles/typo";

const Footer = () => {
  return (
    <Container>
      <div className="footerWrap">
        <h3 className="logo">caffein</h3>
        <div className="siteInfoWrap">
          <address className="companyInfo">
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
          </address>
          <p className="copyright">
            Copyright by (주)카페인. All right reserved.
          </p>
          <div className="footerMenu">
            <a href="#">이용약관</a>
            <a href="#">개인정보처리방침</a>
          </div>
        </div>
        <div className="snsBtnWrap">
          <div className="snsBtn">
            <img src="/assets/image/icons/twitter-icon.svg" alt="공식 트위터" />
          </div>
          <div className="snsBtn">
            <img
              src="/assets/image/icons/facebook-icon.svg"
              alt="공식 페이스북"
            />
          </div>
          <div className="snsBtn">
            <img
              src="/assets/image/icons/instagram-icon.svg"
              alt="공식 인스타그램"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 32px 0 64px;
  background-color: ${colors.Gray05};

  h3 {
    ${typo.H3}
  }

  .footerWrap {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
  }

  .logo {
    font-family: "Roboto Slab", serif;
    color: ${colors.Primary01};
    width: 25%;
    cursor: default;
  }

  .siteInfoWrap {
    display: flex;
    flex-direction: column;
    ${typo.caption};
    color: ${colors.Gray02};
    width: 50%;
  }

  .companyInfo {
    font-style: normal;
  }
  .copyright {
    margin: 0;
  }
  .footerMenu {
    padding-top: 20px;
  }
  .footerMenu a {
    text-decoration: none;
    color: ${colors.Gray01};
    margin-right: 10px;
  }

  .snsBtnWrap {
    display: flex;
    width: 25%;
    justify-content: flex-end;
  }
  .snsBtn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .snsBtn:nth-child(1) {
    background-color: #63b3ed;
  }
  .snsBtn:nth-child(2) {
    background-color: #3182ce;
  }
  .snsBtn:nth-child(3) {
    background-color: #2d3748;
  }
`;

export default Footer;
