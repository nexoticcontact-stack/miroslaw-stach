import { Container, InforamtionHeader, InformationLink, InformationText, InformationWrapper, Informations, InformationsTitle, InformationsWrapper, Logo, LogoSpan, Wrapper } from "./styledFooter"

export const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Logo to="/home" onClick={() => window.scrollTo(0, 0)}> Mirosław Stach<LogoSpan> Firma Usługowa</LogoSpan></Logo>
                <InformationsWrapper>
                    <InformationsTitle>Kontakt</InformationsTitle>
                    <Informations>Mirosław Stach Firma Usługowa </Informations>
                    <Informations>Przeginia 87</Informations>
                    <Informations>Woj. Małopolskie </Informations>
                    <Informations>32-049 Przeginia </Informations>
                    <Informations>Nip:5130134954 </Informations>
                </InformationsWrapper>

            </Container>
            <InformationWrapper>
                <InforamtionHeader>Polityka prywatności </InforamtionHeader>
                <InformationText>
                    ©2023 Projekt i realizacja <InformationLink href="https://www.facebook.com/marcin.izdebski.7528/" target="blank">Marcin Izdebski</InformationLink>
                </InformationText>
            </InformationWrapper>
        </Wrapper>
    )
}