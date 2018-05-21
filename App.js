import React from "react";
import { Root } from "native-base";
// import { Drawer, Container, Header, Content, Button } from "native-base";
// import { createDrawerNavigator } from "react-navigation";
import SideBar from "./screens/sidebar/";
// import HeaderBar from "./screens/header";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Font, AppLoading } from "expo";
import User from "./screens/user/";
import Detail from "./screens/detail/";
const Drawer = createDrawerNavigator(
  {
    User: { screen: User },
    Detail: { screen: Detail }
  },
  {
    initialRouteName: "User",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
      this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Root>
          <AppLoading />
        </Root>;
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}
