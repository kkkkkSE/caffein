import styled from "styled-components";
import typo from "../../../../styles/typo";
import colors from "../../../../styles/color";

const CommunityCard = () => {
  return (
    <Card>
      <div className="communityCard">
        <div className="topPart">
          <span className="postFeature postTag">글 특징</span>
          <span className="postCategory postTag">글 카테고리</span>
          <p className="postTitle">커뮤니티에 작성한 글 제목이 나타납니다.</p>
          <p className="postCont">커뮤니티에 작성한 글의 내용이 나타납니다.</p>
        </div>
        <div className="bottomPart">
          <div className="comment">
            <div className="commentImg"></div>
            <div className="commentNickname">멘토1342</div>
          </div>
          <div className="comment">
            <div className="commentImg"></div>
            <div className="commentNickname">멘토1342</div>
          </div>
          <a href="#" className="moreBtn">
            ＋더보기
          </a>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  box-sizing: border-box;
  padding: 16px;
  width: calc((100% - 60px) / 4);
  height: 320px;
  border: 1px solid #cccccc;
  box-sizing: border-box;
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
    ${typo.caption}
    box-sizing: border-box;
    border-radius: 4px;
    padding: 4px;
    margin-right: 8px;
    font-weight: bold;
  }
  .postFeature {
    background-color: ${colors.Primary01};
    color: ${colors.White};
  }
  .postCategory {
    background-color: ${colors.Gray04};
  }

  .postTitle {
    ${typo.Body1}
    font-weight: bold;
  }
  .postCont {
    ${typo.Body2}
  }

  .comment {
    display: flex;
    margin-bottom: 20px;
  }
  .comment:last-child {
    margin-bottom: 0;
  }
  .commentImg {
    width: 30px;
    height: 30px;
    background-color: ${colors.Gray05};
    border-radius: 50%;
    margin-right: 8px;
  }
  .commentNickname {
    ${typo.Body2}
    font-weight: bold;
  }

  .moreBtn {
    text-decoration: none;
    ${typo.caption}
    color: ${colors.Secondary01};
    display: block;
    text-align: center;
  }
`;
export default CommunityCard;
