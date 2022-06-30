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
    })

})