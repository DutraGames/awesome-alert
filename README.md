# **Awesome-Alert**

I created this JS library as an open source project.

to provide beautiful alert box messages made with just HTML, CSS and JS.

Feel free to contribute a pull request or suggestions. Because the community that uses it is the same that contributes!

![bandeja de alerta](https://user-images.githubusercontent.com/69097449/191129044-5c3b6b43-0b2b-4601-826c-bc1b2640de63.jpg)

## **Installation Instructions**

* Clone this repository in your project's lib folder or download the JS and CSS files.

* Import "style.css" and "awesomeAlert.js" into your code as described below:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <script defer src="libs/awesome-alert/awesomeAlert.js"><script>
        <link rel="stylesheet" href="libs/awesome-alert/style.css">
    </head>
</html>
```

## **Docs**

It's very simple to import this lib into your code, all you need to do is call awesomeAlert() and pass its arguments in object notation.

```title``` will be the alert title, by default it is "".

```message``` will be the alert message, by default it is "".

```buttonOK``` is an optional parameter, by default it is set to "OK".

```img``` will be the image that will appear to the user. By default it is "".

```type``` will define what type of alert will be shown.

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    awesomeAlert({
        type: 'success',
        title: 'Success!',
        message: 'Successful action!',
        img: 'imgs/success.svg',
        buttonOK: 'OK!'
    })
})
```

```js
const btnError = document.querySelector('.show-Error')
btnError.addEventListener('click', () =>{
    awesomeAlert({
        type: 'error',
        title: 'Error!',
        message: 'Something went wrong!',
        img: 'imgs/error.svg',
        buttonOK: 'OK!'
    })
})
```

```js
const btnWarning = document.querySelector('.show-Warning')
btnWarning.addEventListener('click', () =>{
    awesomeAlert({
        type: 'warning',
        title: 'Warning!',
        message: 'Wait, it will be ready soon.',
        img: 'imgs/warning.svg',
        buttonOK: 'OK!'
    })
})
```

```js
const btnInfo = document.querySelector('.show-Info')
btnInfo.addEventListener('click', () =>{
    awesomeAlert({
        type: 'info',
        title: 'Info!',
        message: 'I inform you that you are more than 2 hours on the computer.',
        img: 'imgs/info.svg',
        buttonOK: 'OK!'
    })
})
```

```js
const btnQuestion = document.querySelector('.show-Question')
btnQuestion.addEventListener('click', () =>{
    awesomeAlert({
        type: 'question',
        title: 'Contribute?',
        message: 'Want to contribute to this library?',
        img: 'imgs/question.svg',
        buttonConfirm: 'Yes!',
        buttonCancel: 'No.'
    })
})
```

```closeStyle``` will be the style of the close alert button. By default it is "default".

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    awesomeAlert({
        type: 'success',
        title: 'Success!',
        message: 'Successful action!',
        img: 'imgs/success.svg',
        buttonOK: 'OK!',
        closeStyle: 'default'
    })
})
```

**OR**

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    awesomeAlert({
        type: 'success',
        title: 'Success!',
        message: 'Successful action!',
        img: 'imgs/success.svg',
        buttonOK: 'OK!',
        closeStyle: 'circle'
    })
})
```

![image](https://user-images.githubusercontent.com/69097449/191096143-5b71ef03-5f04-44a5-b5dd-44258a0c8dae.png)
