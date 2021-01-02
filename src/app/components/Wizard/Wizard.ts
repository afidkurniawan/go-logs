import styled from "styled-components/macro";

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 28px solid #ffffff;
  margin-left: 8%;
`;

export const Title = styled.label`
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

export const Form = styled.form`
  margin-left: 5%;
`;

export const Label = styled.p`
  color: #222151;
  font-size: 18px;
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
  border-radius: 14px;
  width: 300px;
  height: 50px;
  border: none;
  font-size: 16px;
  color: #a0a3bd;
  font-family: "Raleway";
  text-align: center;
  text-align-last: center;
  justify-content: center;
  margin-right: 1em;
  outline: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a0a3bd;
    opacity: 1; /* Firefox */
  }
`;

export const Dropdown = styled.select`
  background: #eff0f7;
  border-radius: 14px;
  width: 300px;
  height: 50px;
  border: none;
  font-size: 16px;
  color: #a0a3bd;
  font-family: "Raleway";
  text-align: center;
  text-align-last: center;
  justify-content: center;
  margin-right: 1em;
  outline: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a0a3bd;
    opacity: 1; /* Firefox */
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 54px;
  font-family: "Raleway";
  text-align: center;
  border: none;
  border-radius: 16px;
  background-color: #ad93f3;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  margin-left: 3em;
  outline: none;
`;
