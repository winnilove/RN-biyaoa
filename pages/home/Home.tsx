import React, { Component } from 'react'

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
  
    render() {
      return (
          <View>
              <Text>这是首页</Text>
          </View>
      )
    }
}