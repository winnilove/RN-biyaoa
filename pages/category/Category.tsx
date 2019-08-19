import React, { Component } from 'react'
import Icon from "react-native-vector-icons/EvilIcons"

import { 
  View,
  Text
} from 'react-native'

interface State {
    
}
  
interface Props {
    navigation?: any
}

export default class Home extends Component<Props, State> {
    state: State = {
    
    }
    static navigationOptions={
      tabBarLabel:'分类',
      tabBarIcon:({focused})=>{
        if(focused){
          return (
            <Icon name="image" size={30} color="rgb(127, 67, 149)" />
          )
        }
        return (
          <Icon name="image" size={30} color="rgb(74, 74, 74)" />
        )
      }
    }
    render() {
      return (
          <View>
              <Text>CategoryCategoryCategory</Text>
          </View>
      )
    }
}