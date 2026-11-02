import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.footer`
    width: 100%;
    bottom: 0;
    color: white;
    background: #4E5156;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        flex-direction: column;
        padding: 12px;
        min-height: 80px;
        margin: 0;
        justify-content: center;
        align-items: center;
        gap: 20px;
    };
`;

export const InformationWrapper = styled.div`
    width: 100%;
    background-color: rgb(181, 90, 8);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px;
    gap: 12px;
`;

export const InforamtionHeader = styled.span`
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const InformationText = styled.span`
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
    };
`;

export const InformationLink = styled.a`
    color: rgb(37, 42, 50);
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`;

export const Copyright = styled.h2`
    font-weight: normal;
    font-size: 20px;
    margin: 0 0 10px 0;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
    };
`;

export const Logo = styled(Link)`
    font-size: 36px;
    text-decoration: none;
    color: white;
    letter-spacing: 6px;


    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
        text-align: center;
    };
`;

export const LogoSpan = styled.span`
    color: rgb(181, 90, 8) ;

`;
export const InformationsWrapper = styled.div`
    display: grid;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;

export const Informations = styled.p`
    margin: 0;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 1px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
        text-align: center;
    };
`;

export const InformationsTitle = styled.h3`
    font-size: 28px;
    color: rgb(181, 90, 8);
    font-weight: normal;
    margin:0;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 4px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        text-align: center;
    };
`;

