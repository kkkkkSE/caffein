import styled from "styled-components";
import { maxWidth } from "../../../styles/mixin";
import colors from "../../../styles/color";
import typo from "../../../styles/typo";

const SubBanner = () => {
  return (
    <Container>
      <div className="subBannerWrap">
        <h2 className="subBannerText">
          현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 54px;
  color: ${colors.White};

  h2 {
    ${typo.H2}
  }

  .subBannerWrap {
    ${maxWidth}
    display: flex;
    align-items: center;
  }
  .subBannerText {
    width: 100%;
    padding: 33px 42px;
    background-color: ${colors.Primary01};
    word-break: keep-all;
  }

  @media (max-width: 767px) {
    padding-bottom: 0;

    .subBannerWrap {
      padding: 0;
    }
  }

  @media (max-width: 567px) {
    .subBannerText {
      padding: 22px 16px;
    }
  }
`;

export default SubBanner;
