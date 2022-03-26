// eslint-disable-next-line
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";
import { maxWidth } from "../../../../styles/mixin";
import CommunityCard from "./CommunityCard";

import { caffeinCommunity } from "../../../../types/type";
import { getCommunities } from "apis/campApis";

const Community = () => {
  const [community, setCommunity] = useState<caffeinCommunity[]>([]);

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    setCommunity(await getCommunities());
  };

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
