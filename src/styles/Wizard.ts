import styled from "styled-components/macro";

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 1.563rem solid transparent;
  border-right: 1.563rem solid transparent;
  border-bottom: 1.75rem solid #ffffff;
  margin-left: 8%;
`;

export const Title = styled.label`
  display: flex;
  color: rgba(17, 17, 17, 0.5);
  font-size: 1rem;
  padding-top: 0.938rem;
  padding-left: 0.938rem;
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
  font-size: 0.875rem;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin-left: 5%;
`;

export const Label = styled.p`
  color: #222151;
  font-size: 1.125rem;
  align-items: center;
  justify-content: center;
`;

export const Group = styled.div`
  display: flex;
`;

export const Icon = styled.img`
  position: absolute;
  float: right;
  margin-left: 3%;
  margin-top: 0.7%;
  height: 2rem;
  z-index: 10;
`;

export const Input = styled.input`
  background: #eff0f7;
  border-radius: 0.75rem;
  width: 23.875rem;
  height: 4rem;
  border: none;
  font-size: 1rem;
  color: #a0a3bd;
  align-items: center;
  margin-right: 1em;
  outline: none;
  padding-left: 1.5rem;
  font-family: "Raleway";
`;

export const Dropdown = styled.div`
  margin-top: 2rem;
  background: #eff0f7;
  border-radius: 0.75rem;
  width: 23.875rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const DropdownText = styled.div`
  margin-left: 1.5rem;
  color: #a0a3bd;
  font-size: 1rem;
  width: 80%;
`;

export const DropdownExpand = styled.img`
  /* margin-left: 11rem; */
  width: 0.8rem;
`;
export const Button = styled("button")<{ show?: boolean }>`
  width: 15rem;
  height: 4rem;
  font-family: "Raleway";
  text-align: center;
  border: none;
  border-radius: 1rem;
  background-color: #ad93f3;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 3rem;
  outline: none;
  display: ${props => (props.show ? "" : "none")};
`;

export const ButtonO = styled("button")<{ show?: boolean }>`
  background: none;
  border: 0.063rem solid #ad93f3;
  border-radius: 1.25rem;
  box-sizing: border-box;
  color: #ad93f3;
  cursor: pointer;
  font-size: 1rem;
  width: 15rem;
  height: 4rem;
  line-height: 1.7rem;
  position: relative;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none;
  font-family: "Raleway";
  display: ${props => (props.show ? "" : "none")};
`;

export const Footer = styled.div`
  margin-top: 2rem;
  float: right;
  padding-bottom: 2rem;
  margin-right: 1.5rem;
`;
