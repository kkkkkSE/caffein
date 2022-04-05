import styled from "styled-components";
import typo from "styles/typo";
import colors from "styles/color";

import { caffeinCommunity } from "types/type";

interface CommunityProps {
  communityData: caffeinCommunity;
}

const selectTagColor = (tag) => {
  return tag === "조회수 TOP"
    ? "postTagPrimaryColor postTag"
    : "postTagGrayColor postTag";
};

const CommunityCard = ({ communityData }: CommunityProps) => {
  return (
    <StyledCard>
      <div className="communityCard">
        <div className="topPart">
          {communityData.tags.map((tag, index) => {
            return (
              <span key={index} className={selectTagColor(tag)}>
                {tag}
              </span>
            );
          })}
          <p className="postTitle">{communityData.title}</p>
          <p className="postCont">{communityData.content}</p>
        </div>
        <div className="bottomPart">
          <ul>
            {communityData.comments.map((comment, index) => {
              return (
                <li key={index} className="comment">
                  <div
                    className="commentAvatar"
                    style={{
                      backgroundImage: `url(${comment.profile})`,
                    }}
                  ></div>
                  <div className="commentTextPart">
                    <div className="commentNickname">{comment.nickname}</div>
                    <div className="commentCont">{comment.content}</div>
                  </div>
                </li>
              );
            })}
          </ul>
          <a href="#" className="moreBtn">
            ＋더보기
          </a>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
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

  .postTagPrimaryColor {
    background-color: ${colors.Primary01};
    color: ${colors.White};
  }
  .postTagGrayColor {
    background-color: ${colors.Gray04};
  }

  .postTitle {
    height: 36px;
    ${typo.Body1}
    font-weight: bold;
    margin-bottom: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .postCont {
    ${typo.Body2}
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
  .commentAvatar {
    width: 30px;
    height: 30px;
    background-color: ${colors.Gray05};
    border-radius: 50%;
  }

  .commentTextPart {
    width: calc(100% - 40px);
  }
  .commentNickname {
    ${typo.Body2}
    font-weight: bold;
    padding-bottom: 6px;
  }
  .commentCont {
    ${typo.caption}
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .moreBtn {
    ${typo.caption}
    color: ${colors.Secondary01};
  }

  @media (max-width: 960px) {
    width: calc((100% - 40px) / 3);
  }
`;
export default CommunityCard;
