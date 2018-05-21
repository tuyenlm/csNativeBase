import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
import style from "./style";

export default class HeaderBar extends Component {
  render() {
    return <Container style={style.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Headers</Title>
          </Body>
          <Right />
        </Header>
      </Container>;
  }
}
