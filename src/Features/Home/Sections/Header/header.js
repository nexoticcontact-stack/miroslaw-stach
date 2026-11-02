import React from 'react';
import { HeaderWrapper, HeaderTitle, TitleSpan, TitleText } from './styledHeader';

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>Mirosław Stach <TitleSpan>Firma Usługowa </TitleSpan><TitleText>Zadowolenie klienta to nasz priorytet</TitleText> </HeaderTitle>
        </HeaderWrapper>
    );
};

