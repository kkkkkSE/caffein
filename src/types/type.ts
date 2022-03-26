export interface caffeinCamp {
  id: number;
  name: string;
  type: "popular" | "sale";
  startDate: string;
  status: string;
  field: string;
  skill: string;
  thumbnail: string;
}

export interface caffeinCommunity {
  id: number;
  tags: string[];
  title: string;
  content: string;
  comments: caffeinComment[];
}

export interface caffeinComment {
  profile: string;
  nickname: string;
  content: string;
}
