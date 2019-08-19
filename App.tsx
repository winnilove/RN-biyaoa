import React, { Fragment } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'mobx-react'
// import SplashScreen from 'react-native-splash-screen'

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'


import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Category from './pages/category/Category'
import Cart from './pages/cart/Cart'
import My from './pages/my/My'

const TabNav = createBottomTabNavigator(
  {
    Home:{
      screen:Home
    },
    Category:{
      screen:Category
    },
    Cart:{
      screen:Cart
    },
    My:{
      screen:My
    }
  },
  {
    tabBarOptions:{
      //当前选中的tab bar的文本颜色和图标颜色
      activeTintColor: 'rgb(127, 67, 149)',
       //当前未选中的tab bar的文本颜色和图标颜色
       inactiveTintColor: 'rgb(74, 74, 74)',
       //是否显示tab bar的图标，默认是false
       showIcon: true,
       //showLabel - 是否显示tab bar的文本，默认是true
       showLabel: true,
       //是否将文本转换为大小，默认是true
       upperCaseLabel: false,
       //material design中的波纹颜色(仅支持Android >= 5.0)
       pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,
        //tab bar的样式
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        //tab bar的文本样式
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 0},
    },
     //tab bar的位置, 可选值： 'top' or 'bottom'
     tabBarPosition: 'bottom',
     //是否允许滑动切换tab页
     swipeEnabled: true,
     //是否在切换tab页时使用动画
     animationEnabled: false,
     //是否懒加载
     lazy: true,
     //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
     backBehavior: 'none',
  }
)

const AppNavigator = createStackNavigator(
  {
    Search,
    Home:{
      screen:TabNav,
      navigationOptions:({navigation})=>({
        header:null
      })
    }
  },
  {
    initialRouteName: "Home",
    headerMode:'screen'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {

  // componentDidMount(){
  //   console.log(SplashScreen)
  //   // SplashScreen.hide() //隐藏启动屏
  // }

  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle="light-content"
        />
        <Provider>
          <AppContainer></AppContainer>
        </Provider>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
