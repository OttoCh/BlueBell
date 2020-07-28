import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Main extends Component {
    render() {
        return(
            <Box color="text.primary">
                <Container id='HeaderContainer'></Container>
                <Container id='BodyContainer'>abc</Container>
            </Box>
        );
    }
}

export default Main;