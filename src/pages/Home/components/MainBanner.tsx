import styled from "styled-components";
import colors from "../../../styles/color";

const MainBanner = () => {
  return (
    <Container>
      <section className="mainBannerSection">
        <div className="leftPart">
          <p className="bannerTitle">
            개발은
            <br /> 카페인과 함께
          </p>
          <div className="arrowPart">
            <div className="line"></div>
            <div className="leftArrow arrow"></div>
            <div className="rightArrow arrow"></div>
          </div>
        </div>
        <div className="rightPart">
          <div className="bannerImage"></div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  color: ${colors.White};
  background-color: ${colors.Primary01};
  padding: 100px 0 60px 0;

  .mainBannerSection {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .leftPart {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .bannerTitle {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }
  .arrowPart {
    display: flex;
    align-items: center;
  }
  .line {
    width: 246px;
    height: 1px;
    background-color: ${colors.White};
    margin-right: 10px;
  }
  .arrow {
    width: 10px;
    height: 20px;
    background-color: ${colors.White};
    margin: 0px 14px;
  }

  .rightPart {
    overflow: hidden;
    border-radius: 10px;
  }
  .bannerImage {
    width: 600px;
    height: 400px;
    background-color: ${colors.White};
  }
`;
export default MainBanner;
