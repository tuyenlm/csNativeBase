import React, { Component } from "react";
import {
  Container,
  Text,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from "native-base";
import style from "./style";

export default class User extends Component {
  render() {
    return <Container style={style.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>User</Title>
          </Body>
          <Right />
        </Header>

        <Text style={style.text}>User</Text>
      </Container>;
  }
}
