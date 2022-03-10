import styled from "styled-components";
import { maxWidth } from "../../../styles/mixin";
import colors from "../../../styles/color";

import bannerImage from "../../../assets/image/banner-img.png";

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
            <div className="leftArrow arrow">
              <img
                src={
                  require("../../../assets/image/icons/left-btn.svg").default
                }
                alt="배너 왼쪽으로 넘기기"
              />
            </div>
            <div className="rightArrow arrow">
              <img
                src={
                  require("../../../assets/image/icons/right-btn.svg").default
                }
                alt="배너 오른쪽으로 넘기기"
              />
            </div>
          </div>
        </div>
        <div className="rightPart">
          <div
            className="bannerImage"
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          ></div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 0 60px;
  background: ${colors.Primary03};
  color: ${colors.White};

  .mainBannerSection {
    ${maxWidth}
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
    padding-bottom: 20px;
  }

  .arrowPart {
    display: flex;
    align-items: center;
  }
  .line {
    width: 246px;
    height: 1px;
    background-color: ${colors.White};
  }
  .arrow {
    margin-left: 25px;
  }

  .rightPart {
    overflow: hidden;
    border-radius: 10px;
  }
  .bannerImage {
    width: 600px;
    height: 400px;
    background-size: cover;
    background-position: 50% 50%;
  }
`;
export default MainBanner;
