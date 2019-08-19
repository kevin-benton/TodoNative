import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Content, Body, Button, Grid, H1, Header, Icon, Left, Right, Row, Text, Title } from 'native-base';
import { clearThemeCache } from 'native-base-shoutem-theme';

// This is the only place other than the theme redux file where the themes should be imported directly.
import MaterialLightTheme from 'TodoNative/App/Theme/MaterialLightTheme';
import MaterialDimTheme from 'TodoNative/App/Theme/MaterialDimTheme';

import Creators from 'TodoNative/App/Redux/ThemeRedux';

class ThemeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Themes</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };

  constructor(props) {
    super(props);
  }

  useLightTheme() {
    clearThemeCache();
    this.props.useLightTheme();
  }

  useDimTheme() {
    clearThemeCache();
    this.props.useDimTheme();
  }

  render() {
    const lightIcon = this.props.theme.containerBgColor === MaterialLightTheme.containerBgColor
        ? 'md-checkmark-circle-outline'
        : 'md-radio-button-off';

    const dimIcon = this.props.theme.containerBgColor === MaterialDimTheme.containerBgColor
        ? 'md-checkmark-circle-outline'
        : 'md-radio-button-off';

    return (
      <Container>
        <Content padder>
          <H1>Customize Your View</H1>

          <Grid padder>
            <Col style={{marginLeft: 10}}>
              <Button bordered
                      iconLeft
                      style={{backgroundColor: MaterialLightTheme.containerBgColor}}
                      onPress={() => this.useLightTheme()}>
                <Icon name={lightIcon} />
                <Text>Light</Text>
              </Button>
            </Col>

            <Col style={{marginLeft: 10, marginRight: 10}}>
              <Button bordered
                      iconLeft
                      style={{backgroundColor: MaterialDimTheme.containerBgColor}}
                      onPress={() => this.useDimTheme()}>
                <Icon name={dimIcon} />
                <Text>Dim</Text>
              </Button>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { theme: state.theme.theme };
};

const mapDispatchToProps = (dispatch) => {
  return {
    useLightTheme: () => {
      dispatch(Creators.useLightTheme())
    },
    useDimTheme: () => {
      dispatch(Creators.useDimTheme())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeScreen);
