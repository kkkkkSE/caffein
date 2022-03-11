import styled from "styled-components";
import { maxWidth } from "../../../styles/mixin";
import colors from "../../../styles/color";

import bannerImage from "../../../assets/image/banner-img.png";

const MainBanner = () => {
  return (
    <Container>
      <section className="mainBannerSection">
        <div className="content">
          <p className="bannerTitle">
            개발은
            <br /> 카페인과 함께
          </p>

          <div
            className="bannerImage"
            style={{
              backgroundImage: `url("/assets/image/banner-img.png")`,
            }}
          ></div>
        </div>

        <div className="arrowPart">
          <div className="line"></div>
          <div className="leftArrow arrow">
            <img
              src="/assets/image/icons/left-btn.svg"
              alt="배너 왼쪽으로 넘기기"
            />
          </div>
          <div className="rightArrow arrow">
            <img
              src={"/assets/image/icons/right-btn.svg"}
              alt="배너 오른쪽으로 넘기기"
            />
          </div>
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
    position: relative;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .bannerTitle {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    padding-bottom: 50px;
  }

  .bannerImage {
    width: 600px;
    height: 400px;
    background-size: cover;
    background-position: 50% 50%;
  }

  .arrowPart {
    position: absolute;
    left: 10px;
    bottom: 0;
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
`;
export default MainBanner;
