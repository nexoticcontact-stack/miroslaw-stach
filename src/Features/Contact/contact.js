import React from 'react';
import { Span, TIleSVG, Tile, TileLink, TileTitle, TilesWrapper, Title, Wrapper } from './styledContact';
import homeSVG from './SVG/home-icon-silhouette-svgrepo-com.svg';
import mobilePhone from './SVG/mobile-phone-material-svgrepo-com.svg';
import email from './SVG/email-1-svgrepo-com.svg'

export const Contact = () => {
    return (
        <Wrapper>
            <Title>Masz pytanie?</Title>
            <Span>Skontaktuj się z nami wybierając jeden z poniższych linków </Span>

            <TilesWrapper>

                <Tile href="tel:794742706">
                    <TIleSVG src={mobilePhone} />
                    <TileTitle>Telefon</TileTitle>
                    <TileLink>794-742-706</TileLink>
                </Tile>

                <Tile href="mailto: miroslawstach88@gmail.com">
                    <TIleSVG src={email} />
                    <TileTitle>E-Mail</TileTitle>
                    <TileLink>miroslawstach88@gmail.com</TileLink>
                </Tile>

                <Tile target='blank' href='https://www.google.com/maps/place/Przeginia+87,+32-049,+Polska/data=!4m2!3m1!1s0x4716fbed46e8553f:0x38a385ba1d45c5?sa=X&ved=2ahUKEwiy3ZLp-7mBAxVtg_0HHSAXDMcQ8gF6BAgVEAA&ved=2ahUKEwiy3ZLp-7mBAxVtg_0HHSAXDMcQ8gF6BAgaEAI'>
                    <TIleSVG src={homeSVG} />
                    <TileTitle>Adres</TileTitle>
                    <TileLink>32-049 Przeginia 87</TileLink>
                </Tile>

            </TilesWrapper>
        </Wrapper>
    );
};

