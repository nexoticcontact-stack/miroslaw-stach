import { useState } from "react";
import { Links, LinksContainer, Logo, LogoSpan, PhoneContainer, PhoneNavbar, Wrapper } from "./styledNavigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navigation = () => {
    const [navbarColor, setNavbarColor] = useState(false);
    const [phoneNavbar, setPhoneNavbar] = useState(false);

    const openPhoneNavbar = () => {
        setPhoneNavbar(!phoneNavbar);
    };

    const changeColor = () => {
        if (window.scrollY > 50) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        };
    };

    window.addEventListener("scroll", changeColor);

    return (
        <>
            <Wrapper scrolled={navbarColor} >
                <Logo to="/home">Mirosław<LogoSpan> Stach</LogoSpan> </Logo>
                <LinksContainer>
                    <Links to="/home" onClick={() => window.scrollTo(0, 0)}>Strona Główna</Links>
                    <Links to="/usługi" onClick={() => window.scrollTo(0, 0)}>Usługi</Links>
                    <Links to="/galeria" onClick={() => window.scrollTo(0, 0)}>Galeria</Links>
                    <Links to="/kontakt" onClick={() => window.scrollTo(0, 0)}>Kontakt</Links>
                </LinksContainer>

                <PhoneNavbar onClick={openPhoneNavbar}>
                    {phoneNavbar ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </PhoneNavbar>

            </Wrapper>

            {phoneNavbar !== null && (
                <PhoneContainer phoneNavbar={phoneNavbar}>
                    <Links to="/home" onClick={() => window.scrollTo(0, 0)}>Strona Główna</Links>
                    <Links to="/usługi" onClick={() => window.scrollTo(0, 0)}>Usługi</Links>
                    <Links to="/galeria" onClick={() => window.scrollTo(0, 0)}>Galeria</Links>
                    <Links to="/kontakt" onClick={() => window.scrollTo(0, 0)}>Kontakt</Links>
                </PhoneContainer>)}

        </>
    )
};



