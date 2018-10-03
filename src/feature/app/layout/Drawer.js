import React, { Component } from 'react';
// import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native';

import AppBar from './AppBar';

class Drawer extends Component {
    render() {
        return (
            <View>
                <AppBar />
            </View>
        );
    }
}

export default Drawer;