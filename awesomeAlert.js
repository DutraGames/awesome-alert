const awesomeAlert = ({
    type,
    img = '',
    title = '',
    message = '',
    buttonOK = 'OK!',
    closeStyle = 'default',
    buttonConfirm = 'Confirm!',
    buttonCancel = 'Cancel.'
}) => {
    return new Promise(resolve => {

        // Variable that takes the "body" element to inject the alert.
        const bodyEl = document.querySelector('body')

        // Alert template variables.
        let templateTitle = `<span class="alert-body-title">${title}</span>`

        let templateMessage = `<span class="alert-body-message">${message}</span>`

        let templateClose = `<span class='alert-close alert-close-style-${closeStyle}'>X</span>`

        let templateImage = `<img src=${img} class="alert-img" alt="">`


        let templateButtons = `<button class="alert-body-button ${type}-bg">${buttonOK}</button>`

        // Make sure it's a question type alert.
        if (type === 'question') {
            templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `
        }

        let templateHeader = `
            <div class="alert-header ${type}-bg">
                ${templateClose}
                ${templateImage}
            </div>`

        let templateBody = `
            <div class="alert-body">
                        ${templateTitle}
                        ${templateMessage}
                        ${templateButtons}
                    </div>`

        let templateAlert = `
            <div class="alert-wallpaper">
                <div class="alert-frame">
                    ${templateHeader}
                    ${templateBody}
                </div>
            </div>
            `

        // Inject the alert into the "body".
        bodyEl.insertAdjacentHTML('beforeend', templateAlert)

        // Variables to use user actions.
        const AlertWallpaper = document.querySelector('.alert-wallpaper')

        const AlertClose = document.querySelector('.alert-close')
        const AlertButtonOK = document.querySelector('.alert-body-button')


        // Actions to be performed.

        // I leave this action disabled as I expect the user to do one of the other actions, rather than simply ignoring it when clicking outside. But if you want to activate, just uncomment.
        /*     AlertWallpaper.addEventListener('click', () =>{
                AlertWallpaper.remove()
            }) */

        // Action that closes the alert on Close.
        AlertClose.addEventListener('click', () => {
            resolve('Close')
            AlertWallpaper.remove()
        })

        // Actions that will be used from the question alert.
        if (type === 'question') {
            const AlertButtonConfirm = document.querySelector('.btn-confirm')
            const AlertButtonCancel = document.querySelector('.btn-cancel')

            AlertButtonConfirm.addEventListener('click', () => {
                resolve('Confirm')
                AlertWallpaper.remove()
            })

            AlertButtonCancel.addEventListener('click', () => {
                resolve('Cancel')
                AlertWallpaper.remove()
            })
        }

        // Action that gives an OK to the button.
        AlertButtonOK.addEventListener('click', () => {
            resolve('OK')
            AlertWallpaper.remove()
        })


    })
}

