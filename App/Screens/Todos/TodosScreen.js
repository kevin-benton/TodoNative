import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {
  Body,
  Button,
  Container,
  Header,
  Content,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base';

class TodosScreen extends Component {
  render() {
    Alert.alert('Screen', 'Rerender');

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Todos</Title>
          </Body>
          <Right />
        </Header>
        <Content padder />
      </Container>
    );
  }
}

TodosScreen.navigationOptions = ({navigation}) => {
  return {
    header: null,
  };
};

const mapStateToProps = state => {
  return {...state};
};

export default connect(mapStateToProps)(TodosScreen);
