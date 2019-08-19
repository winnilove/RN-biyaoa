/**
 * @flie 首页和分类页头部的搜索框
 */

import * as React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"

export interface IAppProps {
}

export class Search extends React.Component<IAppProps> {
    constructor(IAppProps) {
        super(IAppProps)
        this.state = { }
    }
    
    handleSearch=()=>{
    }
    componentDidMount(){
        // console.log(this.props.navigation)
    }
    public render() {
        return (
        <View  style={styles.searchCon}>
            <TouchableOpacity 
                style={styles.searchInput} 
                onPress={this.handleSearch}
            >
                <Text >
                    <Icon name="search1" size={18} color="#aaa" />
                    <Text style={styles.searin}>女装</Text>
                </Text>
            </TouchableOpacity>
            <View style={styles.msg}>
                <Text><Icon name="message1" size={18} color="#aaa"/></Text>
                <Text style={styles.msgcon}>消息</Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    searchCon:{
        height:40,
        backgroundColor:"#fff",
        flex:1,
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        paddingHorizontal:25,
        color:"#aaa",
        position:"relative"
    },
    searchInput:{
        backgroundColor:"#eee",
        borderRadius:20,
        height:30,
        flex:8,
        display:"flex",
        justifyContent: 'center',
        marginRight:20,
        marginTop:5,
        paddingLeft:16,
        fontSize:12,
        color:"#aaa",
    },
    msg:{
        height:40,
        flex:1,
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
    },
    msgText:{
        flex:1
    },
    msgcon :{
        fontSize:12,
        color:"#999",
        lineHeight:20,
    },
    searin:{
        lineHeight:30,
        color:"#aaa",
        paddingLeft:10,
    }

});



