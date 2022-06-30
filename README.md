![Javascript copy to clipboard](./images/javascript-banner.jpg)

# Javascript Copy To Clipboard
#### Resources
1. MATERIAL ICONS INSTALL [Google Fonts](https://fonts.googleapis.com/icon?family=Material+Icons)
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
2. MATERIAL ICONS LIBRARY: [Content Copy](https://fonts.google.com/icons?icon.style=Filled&icon.set=Material+Icons&icon.query=copy)
`<span class="material-icons">content_copy</span>`

## Begin JavaScript! :cowboy_hat_face:
```javascript
const copyContent = document.querySelectorAll('.copy-content').forEach(copyContentContainer => {
    const inputField = copyContentContainer.querySelector('.copy-content-input')
    const copyButton = copyContentContainer.querySelector('.copy-content-button')
    const text = inputField.value

    inputField.addEventListener('focus', () => {
        inputField.select()
        navigator.clipboard.writeText(text)
    })

    copyButton.addEventListener('click', () => {
        inputField.select()
        navigator.clipboard.writeText(text)

        inputField.value = "Copied!";
        setInterval(() => inputField.value = text, 2000)
    })

})
```