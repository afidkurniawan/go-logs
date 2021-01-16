import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 20vh;
  left: 0px;
  top: 100px;
`;

export const MenuItem = styled("div")<{ active?: boolean; child?: boolean }>`
  background: ${props => (props.active ? "#F1F1FF" : "transparent")};
  padding-left: ${props => (props.child ? "3.5em" : "2em")};
  display: flex;
  width: ${props => (props.child ? "90vw" : "170%")};
  margin-left: 0.3rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.7rem;
`;

export const Span = styled("span")<{ active?: boolean }>`
  color: ${props => (props.active ? "#7456FD" : "#111111")};
  display: flex;
  font-size: 1rem;
  margin-right: 1rem;
`;

export const Icon = styled.img`
  height: 1rem;
  padding-right: 0.5rem;
`;

export const Title = styled("h1")<{ active?: boolean }>`
  font-weight: ${props => (props.active ? "20rem" : "normal")};
  color: ${props => (props.active ? "#7456FD" : "#111111")};
  font-style: normal;
  font-size: 0.9rem;
`;

export const Arrow = styled("img")<{ show?: boolean }>`
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: flex-end;
  align-items: right;
  width: auto;
  height: 20%;
  padding-left: 25%;
`;
