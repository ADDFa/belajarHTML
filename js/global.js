const xhr = new XMLHttpRequest
const el = element => document.querySelector(`${element}`)

const getDocument = (req = null) => {
    let target = (req && req.target.classList.contains('link-item')) ? req.target.hash : location.hash

    target = target.split('')
    target.shift('#')
    target = target.join('')

    setStyle(target)

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) el('#page').innerHTML = xhr.response
    }

    xhr.open('GET', `html/${target}.html`, true)
    xhr.send()
}

const setDocument = () => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) el('#page').innerHTML = xhr.response
    }

    xhr.open('GET', `html/introduction.html`, true)
    xhr.send()
}