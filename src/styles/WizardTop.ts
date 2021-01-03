import styled from "styled-components/macro";

export const Container = styled.div`
  height: 265px;
  background: #ffffff;
  border-radius: 20px;
  width: 103%;
`;

export const Icon = styled.img`
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
  width: 33%;
  height: 33%;
`;

export const Circle = styled("div")<{ active?: boolean; show?: boolean }>`
  background: ${props => (props.active ? "#7456FD" : "#EFF0F6")};
  margin-left: ${props => (props.show ? "40%" : "")};
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
  display: flex;
  width: 30px;
  height: 30px;
`;

export const Number = styled("div")<{ active?: boolean }>`
  color: ${props => (props.active ? "#FFFFFF" : "#3F3F3F")};
  font-size: 13px;
`;

export const Rectangle = styled("div")<{ show?: boolean }>`
  background-color: ${props => (props.show ? "#EFF0F6" : "#FFFFFF")};
  height: 6px;
  width: 45%;
`;
