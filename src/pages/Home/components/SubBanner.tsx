import styled from "styled-components";
import { maxWidth } from "../../../styles/mixin";
import colors from "../../../styles/color";
import typo from "../../../styles/typo";

const SubBanner = () => {
  return (
    <Container>
      <div className="subBannerWrap">
        <h2 className="subBannerDesc">
          현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 54px 0;
  color: ${colors.White};

  h2 {
    ${typo.H2}
  }

  .subBannerWrap {
    ${maxWidth}
    display: flex;
    align-items: center;
  }
  .subBannerDesc {
    width: 100%;
    line-height: 100px;
    background-color: ${colors.Primary01};
    padding-left: 42px;
  }
`;

export default SubBanner;
