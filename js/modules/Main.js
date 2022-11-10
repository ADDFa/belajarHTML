import {
    Global
} from "./Global.js"

export class Main extends Global {
    constructor() {
        super()
        this.getDocument(this.getReq())
    }

    getDocument = req => {
        if (req.length < 1 && location.href !== this.baseUrl + 'index') location.href = this.baseUrl + 'index'

        const src = (req.length < 1) ? 'introduction' : req[0]
        this.setStyle(src)

        this.xhr.onreadystatechange = () => (this.xhr.status === 200 && this.xhr.readyState === 4) ? this.el('#page').innerHTML = this.xhr.response : ''
        this.xhr.open('GET', this.getHtmlUrl(src), true)
        this.xhr.send()
    }

    getHtmlUrl = src => `${this.baseUrl}/html/${src}.html`

    setStyle = href => {
        if (!this.el('link')) {
            let style = document.createElement('link')
            style.setAttribute('rel', 'stylesheet')
            style.setAttribute('href', `styles/${href}.css`)

            document.querySelector('head').append(style)
        }

        this.el('link').setAttribute('href', `styles/${href}.css`)
    }
}