window.addEventListener('load', () => (!location.hash) ? setDocument() : getDocument())
el('body').addEventListener('click', getDocument)