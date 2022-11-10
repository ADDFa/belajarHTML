import {
    Main
} from "./modules/Main.js"

const main = new Main

document.addEventListener('click', e => {
    if (!e.target.classList.contains('link-item')) return

    main.getDocument(main.getReq(e.target.getAttribute('href')))
})