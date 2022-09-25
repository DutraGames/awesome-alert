const awesomeAlert = ({
    type = 'success',
    img = '',
    title = 'Success',
    message = 'Success Action!',
    buttonOK = 'OK!',
    closeStyle = 'default',
    buttonConfirm = 'Confirm!',
    buttonCancel = 'Cancel.',
    placeholderInput = 'write...',
    bgColor = '#2dd284'
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

        // Make sure it's a opinion type alert.
        if (type === 'opinion') {
            templateButtons = `
                <div class="buttons-question">
                    <button class="alert-body-button btn-confirm">${buttonConfirm}</button>
                    <button class="alert-body-button ${type}-bg">${buttonOK}</button>
                    <button class="alert-body-button btn-cancel">${buttonCancel}</button>
                </div>
                `
        }

        //Custom button colors.
        if (type === 'custom') {
            templateButtons = `<button class="alert-body-button bg-global">${buttonOK}</button>`
        }

        let templateHeader = `
            <div class="alert-header ${type}-bg">
                ${templateClose}
                ${templateImage}
            </div>`

        //Custom header colors.
        if (type == 'custom') {
            templateHeader = `
                <div class="alert-header bg-global">
                    ${templateClose}
                    ${templateImage}
                </div>`

        }


        let templateBody = `
            <div class="alert-body">
                        ${templateTitle}
                        ${templateMessage}
                        ${templateButtons}
                    </div>`

        // Body model for Input exclusive use
        if (type === 'input') {
            templateBody = `
            <div class="alert-body">
                ${templateTitle}
                <input type="text" value="" class="alert-input" placeholder="${placeholderInput}" >
                ${templateButtons}
            </div>
            `
        }

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

        //////////////////////////////////////////////////////////////////////////

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

        // Actions that will be used from the opinion alert.
        if (type === 'opinion') {
            const AlertButtonOpinion = document.querySelectorAll('.opinion-bg')
            const AlertButtonConfirm = document.querySelector('.btn-confirm')
            const AlertButtonCancel = document.querySelector('.btn-cancel')

            AlertButtonOpinion[1].addEventListener('click', () => {
                resolve('OK')
                AlertWallpaper.remove()
            })

            AlertButtonConfirm.addEventListener('click', () => {
                resolve('Confirm')
                AlertWallpaper.remove()
            })

            AlertButtonCancel.addEventListener('click', () => {
                resolve('Cancel')
                AlertWallpaper.remove()
            })
        }

        // Alert actions the user passes a value
        if (type === 'input') {
            AlertButtonOK.addEventListener('click', () => {
                const AlertInput = document.querySelector('.alert-input').value
                resolve(AlertInput)
                AlertWallpaper.remove()
            })
        }

        // Action that gives an OK to the button.
        AlertButtonOK.addEventListener('click', () => {
            resolve('OK')
            AlertWallpaper.remove()
        })

        // Background color application
        if (type === 'custom') {
            const ColorBGs = document.querySelectorAll('.bg-global')
            ColorBGs[0].style.backgroundColor = bgColor
            ColorBGs[1].style.backgroundColor = bgColor
        }

    })
}

const awesomeToast = ({
    type = 'success',
    title = 'Success',
    message = 'Success Action!',
    img = ''
}) =>{
    return new Promise(resolve = () =>{
        const bodyEl = document.querySelector('body')

        templateToast = `
        <div class="toast-main ${type}-bg">
            <img src=${img} class="toast-img" alt="">
            <div class="toast-content">
                <span class="toast-title">${title}</span>
                <span class="toast-message">${message}</span>
            </div>
        </div>
        `

        bodyEl.insertAdjacentHTML('beforeend', templateToast)
    })
}
