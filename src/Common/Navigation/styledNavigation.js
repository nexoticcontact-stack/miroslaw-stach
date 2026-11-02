import { Link, NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.nav`
  margin: 0;
  width: 100%;
  display: flex;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  position: sticky;
  z-index: 10;
  top:0;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    padding:10px 15px;
  };

  ${({ scrolled }) => scrolled && css`
    border-bottom:2px solid black;
  `};
`;

export const Logo = styled(Link)`
  font-size: 32px;
  color: rgb(181, 90, 8);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 6px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 20px;
  };
`;

export const LogoSpan = styled.span`
  color: black;
`;

export const LinksContainer = styled.li`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 60px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  };
`;

const activeClassName = "active";

export const Links = styled(NavLink)`
  color: black;
  margin: auto;
  text-decoration: none;
  transition: .5s;
  padding: 10px;
  font-size: 18px;


  &:hover {
    transform: translateY(-7px);
  }

  &.${activeClassName} {
    transition: 1s;
    border-bottom: 1px solid black;
  }
`;

export const PhoneNavbar = styled.div`
  cursor: pointer;
  transition: 5s;

  @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const PhoneContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  padding: 20px;
  width: 100%;
  display: grid;
  z-index: 980;
  grid-gap: 20px;
  animation: ${({ phoneNavbar }) => (phoneNavbar ? fadeIn : fadeOut)} 0.5s ease-in-out forwards;

  @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  }
`;
