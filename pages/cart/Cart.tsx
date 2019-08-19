import React, { Component } from 'react'
import Icon from "react-native-vector-icons/EvilIcons"

import { 
  View,
  Text
} from 'react-native'

interface State {
    selectedTab: string,
    isShowMap: boolean
}
  
interface Props {
    navigation?: any
}

export default class Home extends Component<Props, State> {
    state: State = {
      selectedTab: 'home',
      isShowMap: true
    }
    static navigationOptions={
      tabBarLabel:'购物车',
      tabBarIcon:({focused})=>{
        if(focused){
          return (
            <Icon name="cart" size={30} color="rgb(127, 67, 149)" />
          )
        }
        return (
          <Icon name="cart" size={30} color="rgb(74, 74, 74)" />
        )
      }
    }
    render() {
      return (
          <View>
              <Text>购物车</Text>
          </View>
      )
    }
}