import styled from "styled-components/macro";

export const Container = styled.div`
  height: 265px;
  background: #ffffff;
  border-radius: 20px;
  width: 103%;
`;

export const Title = styled.p`
  display: flex;
  color: rgba(17, 17, 17, 0.5);
  font-size: 16px;
  padding-top: 15px;
  padding-left: 15px;
`;

export const Row = styled.div`
  text-align: center;
  align-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  flex: 100%;
  text-align: center;
  align-content: center;
  display: flex-box;
`;

export const Icon = styled.img`
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
  width: 33%;
  height: 33%;
`;

export const Item = styled.div`
  padding-top: 1em;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
`;

export const ItemTitle = styled.p`
  color: #222151;
  font-size: 14px;
  align-items: center;
  justify-content: center;
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
