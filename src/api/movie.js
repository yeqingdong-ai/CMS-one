import request from './request.js'

export function getHotList() {
    let url = '/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=1010946'
    return request({
        url,
        methods: 'get'
    })
}

export function getWillList() {
    let url = '/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=4475064'
    return request({
        url,
        method: 'get'
    })
}