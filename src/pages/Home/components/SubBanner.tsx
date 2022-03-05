import styled from "styled-components";
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
  color: ${colors.White};
  h2 {
    ${typo.H2}
  }
  padding: 54px 0;

  .subBannerWrap {
    width: 960px;
    height: 100px;
    margin: 0 auto;
    background-color: ${colors.Primary01};
    display: flex;
    align-items: center;
    padding: 42px;
    box-sizing: border-box;
  }
`;

export default SubBanner;
