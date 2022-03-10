import styled from "styled-components";
import typo from "../../../../styles/typo";
import colors from "../../../../styles/color";

import { caffeinCommunity } from "../../../../types/type";

interface CommunityProps {
  data: caffeinCommunity;
}

const CommunityCard = ({ data }: CommunityProps) => {
  return (
    <Card>
      <div className="communityCard">
        <div className="topPart">
          <span
            className={`${
              data.topPost ? "topViewPost postTag" : "topViewPost postTag hide"
            }`}
          >
            조회수 TOP
          </span>
          <span className="postCategory postTag">{data.postCategory}</span>
          <p className="postTitle">{data.title}</p>
          <p className="postCont">{data.content}</p>
        </div>
        <div className="bottomPart">
          <ul>
            <li className="comment">
              <div className="commentAvatar"></div>
              <div className="commentTextPart">
                <div className="commentNickname">
                  {data.comments[0].nickname}
                </div>
                <div className="commentCont">{data.comments[0].content}</div>
              </div>
            </li>
            <li className="comment">
              <div className="commentAvatar"></div>
              <div className="commentTextPart">
                <div className="commentNickname">
                  {data.comments[1].nickname}
                </div>
                <div className="commentCont">{data.comments[1].content}</div>
              </div>
            </li>
          </ul>
          <a href="#" className="moreBtn">
            ＋더보기
          </a>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  width: calc((100% - 60px) / 4);
  height: 320px;
  padding: 16px;
  background-color: ${colors.White};
  border: 1px solid ${colors.Gray04};
  border-radius: 10px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);

  .communityCard {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .postTag {
    display: inline-block;
    padding: 4px;
    ${typo.caption}
    font-weight: bold;
    border-radius: 4px;
    margin: 0 8px 8px 0;
  }
  .postTag.hide {
    display: none;
  }

  .topViewPost {
    background-color: ${colors.Primary01};
    color: ${colors.White};
  }
  .postCategory {
    background-color: ${colors.Gray04};
  }

  .postTitle {
    ${typo.Body1}
    font-weight: bold;
    padding-bottom: 10px;
  }
  .postCont {
    ${typo.Body2}
  }

  .bottomPart {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bottomPart ul {
    width: 100%;
  }
  .comment {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }
  .commentAvatar {
    width: 30px;
    height: 30px;
    background-color: ${colors.Gray05};
    border-radius: 50%;
    margin-right: 8px;
  }

  .commentNickname {
    ${typo.Body2}
    font-weight: bold;
    padding-bottom: 6px;
  }
  .commentCont {
    ${typo.caption}
  }

  .moreBtn {
    ${typo.caption}
    color: ${colors.Secondary01};
  }
`;
export default CommunityCard;
