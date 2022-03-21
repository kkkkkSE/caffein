import styled from "styled-components";
import { maxWidth } from "../../../styles/mixin";
import colors from "../../../styles/color";
import typo from "../../../styles/typo";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Autoplay]);

const MainBanner = () => {
  return (
    <Container>
      <section className="mainBannerSection">
        <StyledSwiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
        >
          <SwiperSlide>
            <div className="bannerTitle">
              <p>
                개발은 <br /> 카페인과 함께
              </p>
            </div>
            <div
              className="bannerImage slide"
              style={{
                backgroundImage: `url("https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/banner-img1.png?raw=true")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerTitle">
              <p>
                현직자와 함께 <br /> 실무체험
              </p>
            </div>
            <div
              className="bannerImage slide"
              style={{
                backgroundImage: `url("https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/banner-img2.jpg?raw=true")`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bannerTitle">
              <p>
                소수정예 <br /> 트레이닝
              </p>
            </div>
            <div
              className="bannerImage slide"
              style={{
                backgroundImage: `url("https://github.com/kkkkkSE/caffein/blob/master/public/assets/image/banner-img3.jpg?raw=true")`,
              }}
            ></div>
          </SwiperSlide>
        </StyledSwiper>

        <div className="line"></div>
      </section>
    </Container>
  );
};

const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    width: 12px;
    height: 20px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;

    position: absolute;
    top: 100%;
  }
  .swiper-button-prev {
    background-image: url("/assets/image/icons/left-btn.svg");
    left: 270px;
  }
  .swiper-button-next {
    background-image: url("/assets/image/icons/right-btn.svg");
    left: 305px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: "";
  }
  .swiper-slide {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 960px) {
    .swiper-button-prev {
      left: 200px;
    }
    .swiper-button-next {
      left: 235px;
    }
  }

  @media (max-width: 767px) {
    .swiper-slide {
      flex-direction: column;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

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

  .line {
    position: absolute;
    left: 10px;
    bottom: 10px;

    width: 246px;
    height: 1px;
    background-color: ${colors.White};
  }

  .bannerTitle {
    display: flex;
    align-items: flex-end;

    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    padding-bottom: 50px;
    white-space: pre-line;
  }

  .bannerImage {
    width: 62.5%;
    height: 400px;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 10px;
  }

  @media (max-width: 960px) {
    .line {
      width: 180px;
    }
    .bannerImage {
      width: 60%;
    }
  }

  @media (max-width: 767px) {
    .line {
      display: none;
    }
    .bannerImage {
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    padding-bottom: 30px;
    .bannerImage {
      height: 200px;
    }
  }
`;

export default MainBanner;
