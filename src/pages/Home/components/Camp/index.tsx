// eslint-disable-next-line
import styled from "styled-components";
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
  padding-top: 4rem;

  .campSection {
    width: 960px;
    margin: 0 auto;
    padding-bottom: 3rem;
  }
  .campSection:last-child {
    padding-bottom: 0;
  }

  .campSectionTitle {
    margin: 0 0 10px;
  }
  .cardWrap {
    display: flex;
    justify-content: space-between;
  }
`;

export default CampSection;
