// eslint-disable-next-line
import styled from "styled-components";
import colors from "../styles/color";
import typo from "../styles/typo";

const Footer = () => {
  return (
    <Container>
      <div className="footerWrap">
        <span className="logo">로고</span>
        <div className="siteInfoWrap">
          <address className="companyInfo">
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
            <br />
            &nbsp;
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
          <div className="snsBtn"></div>
          <div className="snsBtn"></div>
          <div className="snsBtn"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 0 4.5rem;
  background-color: ${colors.Gray05};

  .footerWrap {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: block;
    color: ${colors.Primary01};
    width: 600px;
  }

  .siteInfoWrap {
    display: flex;
    flex-direction: column;
    ${typo.caption};
    color: #484848;
  }

  .companyInfo {
    font-style: normal;
    width: 600px;
  }
  .copyright {
    margin: 0;
  }
  .footerMenu {
    padding-top: 20px;
  }
  .footerMenu a {
    text-decoration: none;
    color: #484848;
    margin-right: 10px;
  }

  .snsBtnWrap {
    display: flex;
    width: 600px;
    justify-content: flex-end;
  }
  .snsBtn {
    width: 30px;
    height: 30px;
    background-color: ${colors.Gray04};
    border-radius: 50%;
    margin-left: 5px;
  }
`;

export default Footer;
