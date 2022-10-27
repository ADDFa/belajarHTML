const setStyle = href => {
    const styles = [...document.querySelectorAll('.style')]
    if (styles) {
        styles.map(e => e.remove())
    }

    let style = document.createElement('link')
    style.setAttribute('rel', 'stylesheet')
    style.setAttribute('href', `styles/${href}.css`)
    style.classList.add('style')

    document.querySelector('head').append(style)
}