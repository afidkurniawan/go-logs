import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  padding-top: 2rem;
  height: 7rem;
  width: 81rem;
  margin-left: 20rem;
  background: #f4f4ff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.div`
  width: 65%;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.125rem;
`;

export const HeaderNav = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0rem;
  margin-right: 0.5rem;
`;

export const Language = styled("div")<{ show?: boolean }>`
  background: #ffffff;
  border-radius: 1.2rem;
  width: 10.6rem;
  height: 3.25rem;
  cursor: pointer;
  align-content: center;
  justify-content: center;
  align-items: center;
  display: flex;
  border: ${props => (props.show ? "0.125rem solid #5f2eea" : "")};
`;

export const LanguageNav = styled.img`
  margin-left: 1rem;
`;

export const Notification = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  width: 3.25rem;
  height: 3.25rem;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const NotificationIcon = styled.img`
  background: #ffffff;
  padding: 0.3rem;
  border-radius: 50%;
  font-weight: bolder;
`;

export const Profile = styled.div`
  background: #ffffff;
  border-radius: 2rem;
  width: 10.6rem;
  height: 3.25rem;
  cursor: pointer;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ProfileIcon = styled.img`
  background: #ffffff;
  padding: 0.3rem;
  border-radius: 50%;
  font-weight: bolder;
`;

export const NavText = styled.p`
  font-size: 1rem;
`;

export const LangOptions = styled.div`
  margin-top: 3.8rem;
  margin-left: 0.3rem;
  padding-left: 0.5rem;
  position: fixed;
  border-radius: 0.94rem;
  background: #ffffff;
  width: 10.5rem;
  height: 6.25rem;
  border: 0.125rem solid rgba(189, 189, 189, 0.33);
  outline-color: rgba(189, 189, 189, 0.33);
`;

export const LangItem = styled.span`
  display: block;
  cursor: pointer;
`;
