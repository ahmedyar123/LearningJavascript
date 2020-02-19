//Forms

//Accesing from fields 
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let avatarFile = document.getElementById('avatar-file');

    console.log(user.value, avatarFile.value);
    event.preventDefault();
})

//Showing validation errors 
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let userError = document.getElementById('user-error');

    if (user.value.length) {
        userError.textContent = 'Invalid entry';
        userError.style.color = 'red';
        user.style.borderColor = 'red';
        user.focus();

        event.preventDefault();
    }
})

//Posting from Javascript
let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
    let user = form.elements['user'];
    let avatarFile = document.getElementById('avatar-file');

    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    }
    let promise = $.post("link here", posting);
    promise.then(
        data => console.log('success: ', data),
        error => console.log('success: ', error)
    )
    event.preventDefault();
})