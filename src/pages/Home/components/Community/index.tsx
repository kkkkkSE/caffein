// eslint-disable-next-line
import styled from "styled-components";
import { maxWidth } from "../../../../styles/mixin";
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
    ${maxWidth}
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default Community;
