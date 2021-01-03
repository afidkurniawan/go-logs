import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  padding-top: 10px;
  display: flex;
  align-items: center;
  height: 80px;
  width: 112%;
  margin-left: 16rem;
  padding: 0 4rem;
`;

export const Title = styled.h2`
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`;

export const HeaderNav = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  justify-content: end;
  margin-right: 2rem;
  width: 68%;
`;

export const NavItem = styled.li``;

export const Language = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  width: 148px;
  height: 52px;
  cursor: pointer;
`;

export const Notification = styled.span`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  width: 52px;
  height: 52px;
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
  border-radius: 20px;
  width: 169px;
  height: 52px;
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
