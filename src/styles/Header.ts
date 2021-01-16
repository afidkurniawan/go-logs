import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  height: 15vh;
  width: 105vw;
  margin-left: 16rem;
  padding: 0 4rem;
`;

export const Title = styled.h2`
  justify-self: start;
  margin-left: 1rem;
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
  width: 120%;
  height: 100%;
`;

export const NotificationIcon = styled.img`
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
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
