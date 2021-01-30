import styled from "styled-components/macro";

export const Container = styled.div`
  display: block;
  min-height: 31rem;
  height: auto;
  background: #ffffff;
  border-radius: 1.25rem;
  width: 80rem;
`;

export const CircleOuter = styled("div")<{ active?: boolean; show?: boolean }>`
  background: ${props => (props.active ? "#7456FD" : "#EFF0F6")};
  margin-left: ${props => (props.show ? "40%" : "")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  display: flex;
  width: 1.625rem;
  height: 1.625rem;
`;

export const CircleInner = styled("div")<{ active?: boolean; show?: boolean }>`
  background: ${props => (props.active ? "#7456FD" : "#EFF0F6")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
  display: ${props => (props.show ? "" : "none")};
`;

export const Rectangle = styled("div")<{ show?: boolean; active?: boolean }>`
  background-color: ${props =>
    props.show ? (props.active ? "#7456FD" : "#EFF0F6") : "#FFFFFF"};
  height: 0.375rem;
  width: 12.7rem;
`;

export const CMark = styled("img")<{ show?: boolean }>`
  width: 1rem;
  height: 1rem;
  display: ${props => (props.show ? "block" : "none")};
`;
