import { Wrapper, TileWrapper, Tile } from "./styledHome";
import { Header } from "./Sections/Header/header";
import { About } from "./Sections/About/about";
import { Realisations } from "./Sections/Realisations/realisations";
import { Services } from "./Sections/Services/services";

export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <About />
            <TileWrapper>
                <Tile>Mirosław Stach Firma Usługowa - Gwarancja jakości</Tile>
            </TileWrapper>
            <Services />
            <Realisations />
        </Wrapper>
    );
};
