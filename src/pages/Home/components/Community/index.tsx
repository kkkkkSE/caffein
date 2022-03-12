// eslint-disable-next-line
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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

  const isTabletScreen = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Container>
      <div className="communitySection">
        {community.map((communityData, index) => {
          if (index === community.length - 1 && isTabletScreen) {
            console.log(index, community.length);
            return;
          } else {
            return <CommunityCard key={index} data={communityData} />;
          }
        })}
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

  @media (max-width: 767px) {
    display: none;
  }
`;

export default Community;
