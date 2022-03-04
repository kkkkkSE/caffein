import styled from "styled-components";

const MainBanner = () => {
  return (
    <Container>
      <div className="wrap"></div>
    </Container>
  );
};

const Container = styled.div`
  .wrap {
    width: 960px;
    height: 80px;
    margin: 0 auto;
    background-color: #ffa;
  }
`;
export default MainBanner;
