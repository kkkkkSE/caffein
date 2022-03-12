import { css } from "styled-components";

export const maxWidth = css`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 567px) {
    padding: 0 20px;
  }
`;
