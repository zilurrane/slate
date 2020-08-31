import React from 'react';
import { Header } from 'react-native-elements';

const HeaderComponent = () => {
    return <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'SLATE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff' }}
    />
}

export default HeaderComponent;
