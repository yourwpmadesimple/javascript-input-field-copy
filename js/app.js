const copyContent = document.querySelectorAll('.copy-content').forEach(copyContentContainer => {
    const inputField = copyContentContainer.querySelector('.copy-content-input')
    const copyButton = copyContentContainer.querySelector('.copy-content-button')
    const text = inputField.value

    inputField.addEventListener('click', () => {
        inputField.select()
        navigator.clipboard.writeText(text)

        inputField.value = "Copied!";
        setInterval(() => inputField.value = text, 2000)
    })

    copyButton.addEventListener('click', () => {
        inputField.select()
        navigator.clipboard.writeText(text)

        inputField.value = "Copied!";
        setInterval(() => inputField.value = text, 2000)
    })

})