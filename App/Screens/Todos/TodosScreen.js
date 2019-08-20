import React, {Component} from 'react';
import {connect} from 'react-redux';
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
