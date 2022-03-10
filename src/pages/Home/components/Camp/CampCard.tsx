import dayjs from "dayjs";
import styled from "styled-components";
import typo from "../../../../styles/typo";
import colors from "../../../../styles/color";

import { caffeinCamp } from "../../../../types/type";

interface CampProps {
  campData: caffeinCamp;
}

const CampCard = ({ campData }: CampProps) => {
  return (
    <Card>
      <div
        className="bgImg"
        style={{
          backgroundImage: `url(${campData.thumbnail})`,
        }}
      >
        <div className="textPart">
          <span className="statusOrSkill">{campData.status}</span>
          <p className="campTitle">{campData.name}</p>
          <span className="startDate">
            {dayjs(campData.startDate).format("M월 D일 시작")}
          </span>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: calc((100% - 60px) / 4);
  height: 280px;
  color: ${colors.White};
  border-radius: 10px;

  .bgImg {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
  }

  .textPart {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 16px;
    background: linear-gradient(
      180deg,
      rgba(39, 63, 40, 0) 0%,
      rgba(89, 89, 89, 0.558824) 15.62%,
      #000000 70.83%
    );
    border-radius: 0 0 10px 10px;
  }
  .statusOrSkill {
    ${typo.Body2}
  }
  .campTitle {
    ${typo.Body1}
    font-weight: bold;
    padding: 11px 0;
    line-height: 1.2;
  }
  .startDate {
    ${typo.caption}
  }
`;
export default CampCard;
