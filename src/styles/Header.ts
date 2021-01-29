import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 10vh;
  width: 79vw;
  margin-left: 20rem;
  overflow: hidden;
  background: #f4f4ff;
  /* background: white; */
`;

export const Title = styled.h1`
  justify-self: start;
  margin-left: 1rem;
  width: 50%;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 10rem;
  cursor: pointer;
`;

export const HeaderNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
  list-style: none;
  justify-content: end;
  margin-right: 2rem;
  width: 68%;
`;

export const NavItem = styled.li``;

export const Language = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 1.5rem;
  width: 110%;
  height: 100%;
  cursor: pointer;
`;

export const Notification = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 1.5rem;
  width: 130%;
  height: 100%;
`;

export const NotificationIcon = styled.img`
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const Profile = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 1.5rem;
  width: 130%;
  height: 100%;
  cursor: pointer;
`;

export const NavText = styled.p`
  display: inline-flex;
  margin-left: 0.5rem;
  vertical-align: middle;
  cursor: pointer;
`;

export const LanguageIcon = styled.img`
  align-items: center;
  margin-left: 1rem;
  margin-top: 0.1rem;
  cursor: pointer;
`;

export const LanguageNav = styled.img`
  margin-left: 0.9rem;
`;

export const ProfileIcon = styled.img`
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
`;

export const Row = styled.div`
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const LangOptions = styled.div`
  margin-top: 0.2rem;
  position: fixed;
  border-radius: 0.5rem;
  background: #ffffff;
  width: 135px;
  height: 100px;
  outline-style: solid;
  outline-color: rgba(189, 189, 189, 0.33);
`;

export const LangItem = styled.span`
  display: block;
  cursor: pointer;
`;
