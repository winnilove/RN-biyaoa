import React, { Component } from 'react'
import Icon from "react-native-vector-icons/EvilIcons"
import{ Search} from '../../components/search/search'
import Swiper from 'react-native-swiper';
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image

} from 'react-native'
//获取屏幕尺寸
var {width, height} = Dimensions.get('window');
var img1 ='https://bfs.biyao.com/group1/M00/37/A7/rBACVF0wTRqAC7UwAAGSUfCB4W4552.jpg'
var img2 = 'https://bfs.biyao.com/group1/M00/2E/4B/rBACW10n_Z-AILHPAAGRiV_F6Ao027.jpg'
var img3 = 'https://bfs.biyao.com/group1/M00/25/A8/rBACYV0m5rCAfR7GAAIHQOd4U0g336.jpg'
var img4 = 'https://bfs.biyao.com/group1/M00/25/A8/rBACYV0m5rCAfR7GAAIHQOd4U0g336.jpg'
var img5 = 'https://bfs.biyao.com/group1/M00/09/4B/rBACW10f9AGAD_-eAAHolVwNJ0U556.jpg'
var img6 = 'https://bfs.biyao.com/group1/M00/08/4B/rBACYV0erNCAQ9_mAAIXpI30p8c731.jpg'

interface State {
    swiper: Array<String>
}
  
interface Props {
    navigation?: any
}

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state={
        swiper:[img1,img2,img3,img4,img5,img6]
      }
    }
    
    static navigationOptions={
      tabBarLabel:'首页',
      tabBarIcon:({focused})=>{
        if(focused){
          return (
            <Icon name="archive" size={32} color="rgb(127, 67, 149)" />
          )
        }
        return (
          <Icon name="archive" size={32} color="rgb(74, 74, 74)" />
        )
      },
      headerTitle:()=><Text>导航头</Text>
    }

    renderChildView(){
      // 数组
      var allChild = [];
      var item = ['推荐','正餐','饮食','男装','女装','眼镜','内衣配饰','母婴','鞋靴','运动','箱包','美妆','个护','家纺','餐厨','电器','家装','家具']
      // 遍历
     for(var i=0; i<item.length; i++){
       allChild.push(
         //循环排列的view中必须有唯一表示
          <View key={i} style={{width:60, height:120, alignItems: 'center',}}>
                  <Text>{item[i]}</Text>
          </View>
       );
     }
     // 返回数组，不然怎么显示出来
     return allChild;
    }
    componentDidMount(){
    }

  
    render() {
      return (
          <View   style={styles.headerSear}>
              <Text style={styles.header}></Text>
              <View>
                <Search />
                <ScrollView style={styles.scrollViewStyle} 
                horizontal={true}
                //  禁用水平滚动条
                showsHorizontalScrollIndicator={false}
                >
                {this.renderChildView()} 
                </ScrollView>
                <View style={styles.swiperView}>
                  <Swiper 
                        autoplay = {true} 
                        height = {150} 
                        showsPagination = {true} 
                        paginationStyle={{
                          bottom: 15, left: null, right: 10
                        }} 
                        dot={<View style={styles.banenr_dot}></View>}
                        activeDot={<View style={styles.active_dot}></View>} 
                        horizontal={true}
                        autoplayTimeout={2.2}
                        >
                      {
                        this.state.swiper.map((item,index)=>{
                          return (
                            <Image style={{width: width, height: 128}} key={index} resizeMode='cover'  source={{uri:item}} ></Image>
                            )
                        })
                      }
                  </Swiper>
                </View>
                
              </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    height:22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSear:{
    flex:1
  },
  scrollViewStyle:{
    height:30,
    marginTop:50,
    fontSize:20,
    color:"red",
  },
  swiperView:{
    height:128,
    width:width,
    backgroundColor:"blue"
  },
  itemStyle:{
    height:40,
    backgroundColor:"pink"
  },
  banenr_dot: {
    width:6,
    height:6,
    backgroundColor:'#fff',
    borderRadius:3,
    borderColor:'#7f4395',
    borderStyle:'solid',
    borderWidth:1,
    marginLeft:2.5,
    marginRight:2.5,
    opacity:0.6
  },
  active_dot:{
      width:6,
      height:6,
      backgroundColor:'#f7b200',
      borderRadius:3,
      marginLeft:2.5,
      marginRight:2.5
  },
});