const awesomeAlert = ({
    type,
    img = '',
    title = '',
    message = '',
    buttonOK = 'OK!',
    closeStyle = 'default'
}) => {

    const bodyEl = document.querySelector('body')

    const AlertWallpaper = document.querySelector('.alert-wallpaper')
    const AlertHeader = document.querySelector('.alert-header')

    let templateTitle = `<span class="alert-body-title">${title}</span>`
    
    let templateMessage = `<span class="alert-body-message">${message}</span>`
    
    let templateClose = `<span class='alert-close-${closeStyle}'>X</span>`

    let templateImage = `<img src=${img} class="alert-img" alt="">`

    
    let templateButtons = `<button class="alert-body-button ${type}-bg">${buttonOK}</button>`
    
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


    bodyEl.insertAdjacentHTML('beforeend', templateAlert)


}