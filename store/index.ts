import {
    observable,
    action
}from 'mobx'

import http from '../utils/http'

class Store{
    @observable swiper:Array<Object> = []

    @action.bound
    async loadData(){
        let data = await http.get('../')
        this.swiper = data
    }
}

export default new Store()