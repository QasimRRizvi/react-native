import React, { Component } from 'react';
import { Container, Header, Left, Right, Title } from 'native-base';
import { StyleSheet } from 'react-native';

// import icons
import Icon from 'react-native-fa-icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#075e54',
    }
});

class AppBar extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.container}>
                    <Left>
                    <Title>WhatsApp</Title>
                    </Left>
                    <Right>
                        <Icon name='user' style={{ fontSize: 45, color: 'white' }} />
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default AppBar;