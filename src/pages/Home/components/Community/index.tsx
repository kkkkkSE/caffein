// eslint-disable-next-line
import { useEffect, useState } from "react";

import styled from "styled-components";
import { maxWidth } from "../../../../styles/mixin";
import CommunityCard from "./CommunityCard";

import { caffeinCommunity } from "../../../../types/type";
import { communityData } from "../dummyData";

const Community = () => {
  const [community, setCommunity] = useState<caffeinCommunity[]>([]);

  useEffect(() => {
    setCommunity([
      communityData[0],
      communityData[1],
      communityData[2],
      communityData[3],
    ]);
  }, []);
  return (
    <Container>
      <div className="communitySection">
        {community.map((communityData, index) => (
          <CommunityCard key={index} data={communityData} />
        ))}
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
