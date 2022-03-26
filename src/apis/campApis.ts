import axios from "axios";

const server = axios.create({
  baseURL: "https://caffein-server.herokuapp.com/api",
});

export const getCampsByType = (type: string) => {
  return server
    .get(`/camps?type=${type}`) // type별로 구분하기 위해 query param 사용
    .then((response) => response.data.data) // 데이터가 한번 더 감싸져서 오기 때문에 서버에서 가져온 응답(데이터)만 리턴하는 부분 (reponse가 어떤 형태인지 확인 후 진행)
    .catch((err) => {
      console.error(err);
    });
};

export const getCommunities = () => {
  return server
    .get(`/communities`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err);
    });
};

//server.get("/camps");
//server.post("");
