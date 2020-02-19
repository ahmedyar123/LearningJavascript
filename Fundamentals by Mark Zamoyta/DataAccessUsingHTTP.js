//Data Access Using HTTP

import $ from 'jquery';

//HTTP requests using jQuery
let promise = $.get("link here");
promise.then(
    data => console.log('success: ', data),
    error => console.log('success: ', error)
)

//HTTP post using jQuery
let user = {
    name: 'ahmed',
    avatar: 'ahmed.png'
}
let promise = $.post("link here", user);
promise.then(
    data => console.log('success: ', data),
    error => console.log('success: ', error)
)