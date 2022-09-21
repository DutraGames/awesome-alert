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

## **Usage**

To use the library, simply select a button and call the ```awesomeAlert()``` function. Like the example below:

```js
const btnSuccess = document.querySelector('.show-Success')
btnSuccess.addEventListener('click', () =>{
    awesomeAlert({
        type: 'success',
        title: 'Success!',
        message: 'Successful action!',
        img: 'imgs/success.svg',
        buttonOK: 'Done!',
    })
})
```

If you want to use the ```Question```, just follow the example below:

```js
const btnQuestion = document.querySelector('.show-Question')
btnQuestion.addEventListener('click', () =>{
    awesomeAlert({
        type: 'question',
        title: 'Do you like cats?',
        message: 'Could you answer me?',
        img: 'imgs/question.svg',
        buttonConfirm: 'Yes',
        buttonCancel: 'No',
        closeStyle: 'circle'
    })
})
```

## **Promise**

The function returns a promise, which returns the user's action.

With this return, you can use the ```then``` method to show something to the user.

```js
const btn = document.querySelector('#Show')

btn.addEventListener('click', () => {
    awesomeAlert({
        type: 'error',
        title: 'Error',
        message: 'Error in System!',
        img: './imgs/error.svg',
        closeStyle: 'circle'
    })
    .then(a => alert(a))
})
```

![image](https://user-images.githubusercontent.com/69097449/191557290-58842d0a-00ee-40ad-92a4-948778206d29.png)

This can be very useful to know what your app/website user did when they saw your alert.

## **Props Alert**

| Name | type | Default | Description |
:--------- | :--------- | :--------- | :--------- |
| ```title```  | ```string``` | ```"Success"``` | Will be the alert title. |
| ```message``` | ```string``` | ```"Success action"``` | Will be the alert message. |
| ```buttonOK``` | ```string``` | ```'OK!'``` | Is an optional parameter. |
| ```img``` | ```string``` | ```""``` | Will be the image that will appear to the user. |
| ```type``` | ```string``` | ```"success"``` | Will define what type of alert will be shown. |
| ```closeStyle``` | ```string``` | ```"default"``` | Will be the style of the close alert button. |

## **Alerts Types**

Types that this library allows of alerts:

* `success`
* `error`
* `warning`
* `info`
* `question`

## **Acknowledgements**

Thanks [@gustavosmanc](https://github.com/gustavosmanc) for having a library that inspired me to make this library

Pull requests, feedbacks and suggestions are welcome!
