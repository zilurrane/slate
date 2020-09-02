import React from 'react';

import { Text } from 'react-native'
import { Card } from 'react-native-elements'


const LiveScreen = () => {
    return (
        <Card containerStyle={{ backgroundColor: '#EEE', margin: 0, height: 200 }}>
            <Text>WebRTC</Text>
        </Card>
    );
};

export default LiveScreen;
