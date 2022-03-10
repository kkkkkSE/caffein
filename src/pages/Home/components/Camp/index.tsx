// eslint-disable-next-line
import styled from "styled-components";
import { maxWidth } from "../../../../styles/mixin";
import typo from "../../../../styles/typo";
import Card from "./CampCard";

const CampSection = () => {
  return (
    <Container>
      <section className="campSection">
        <h2 className="campSectionTitle">캠프타입 받고 타이틀 설정</h2>
        <div className="cardWrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="campSection">
        <h2 className="campSectionTitle">캠프타입 받고 타이틀 설정</h2>
        <div className="cardWrap">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    ${typo.H2}
  }

  .campSection {
    ${maxWidth}
    padding-bottom: 50px;
  }
  .campSection:last-child {
    padding-bottom: 0;
  }

  .campSectionTitle {
    padding-bottom: 15px;
  }

  .cardWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default CampSection;
