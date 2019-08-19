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
      tabBarLabel:'我的',
      tabBarIcon:({focused})=>{
        if(focused){
          return (
            <Icon name="user" size={30} color="rgb(127, 67, 149)" />
          )
        }
        return (
          <Icon name="user" size={30} color="rgb(74, 74, 74)" />
        )
      }
    }
    render() {
      return (
          <View>
              <Text>My My</Text>
          </View>
      )
    }
}