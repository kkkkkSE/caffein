// eslint-disable-next-line
import { useEffect, useState } from "react";
import styled from "styled-components";

import { maxWidth } from "styles/mixin";
import typo from "styles/typo";
import Card from "./CampCard";

import { caffeinCamp } from "types/type";
import { getCampsByType } from "apis/campApis";

const CampSection = () => {
  const [popCamp, setPopCamp] = useState<caffeinCamp[]>([]);
  const [saleCamp, setSaleCamp] = useState<caffeinCamp[]>([]);

  useEffect(() => {
    fetchCamps("popular");
    fetchCamps("sale");
  }, []);

  const fetchCamps = async (type: string) => {
    const camps = await getCampsByType(type);
    if (type === "popular") {
      setPopCamp(camps);
    } else if (type === "sale") {
      setSaleCamp(camps);
    }
  };

  return (
    <Container>
      <section className="campSection">
        <h2 className="campSectionTitle">인기 부트 캠프</h2>
        <div className="cardWrap">
          {popCamp.map((campData, index) => (
            <Card key={index} campData={campData} />
          ))}
        </div>
      </section>
      <section className="campSection">
        <h2 className="campSectionTitle">특가 할인 캠프</h2>
        <div className="cardWrap">
          {saleCamp.map((campData, index) => (
            <Card key={index} campData={campData} />
          ))}
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

  .campSectionTitle {
    padding-bottom: 15px;
  }

  .cardWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 567px) {
    .campSection {
      padding-bottom: 80px;
    }
  }
`;

export default CampSection;
