export class Global {
    constructor() {
        this.xhr = new XMLHttpRequest
        this.baseUrl = origin + '/belajarHTML/'
    }

    getReq = target => (target) ? this.splitFilterReq(target) : this.splitFilterReq(location.hash)

    splitFilterReq = (element, split = '#', filter = '') => element.split(`${split}`).filter(e => e !== `${filter}`)

    // ? Ambil Element Berdasarkan Apapun (class, id, tag, dsb)
    el = element => document.querySelector(`${element}`)

    // ? Ambil Element Berdasarkan Apapun (class, id, tag, dsb)
    elAll = element => Array.from(document.querySelectorAll(`${element}`))
}