// eslint-disable-next-line
import styled from "styled-components";
import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <Container>
      <div className="communitySection">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .communitySection {
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export default Community;
