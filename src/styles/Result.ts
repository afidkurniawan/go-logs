import styled from "styled-components/macro";

export const Message = styled("div")<{ error?: boolean }>`
  margin-top: 2%;
  width: 90%;
  height: 6vh;
  background-color: ${props => (props.error ? "#EA5D5E" : "#00ba88")};
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2%;
`;

export const MessageTitle = styled.h4`
  padding-top: 0.7em;
  color: "#ffffff";
  font-size: 16px;
`;

export const Label = styled.p`
  color: #222151;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  background: #eff0f7;
  border-radius: 14px;
  width: 80%;
  height: 60%;
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

export const InputLong = styled.input`
  background: #eff0f7;
  border-radius: 14px;
  width: 85%;
  height: 60%;
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

export const Form = styled.form`
  margin-left: 5%;
`;

export const Row = styled.div`
  margin-top: 0.1em;
  padding-bottom: 1em;
  display: flex;
`;

export const Col2 = styled.div`
  width: 20%;
`;

export const Col3 = styled.div`
  width: 40%;
`;

export const Col6 = styled.div`
  width: 47%;
`;

export const Col9 = styled.div`
  width: 60%;
`;

export const Col12 = styled.div`
  width: 80%;
`;
