let password = prompt('Придумайте пароль');

let upperPass = /[A-Z]/.test(password);

if (password === 'qwerty' || password === '123456') {
    console.log('Weak');
} else if (upperPass < 1) {
    console.log('Weak');
} else if (password.length === 5) {
    console.log('Middle');
} else if (password.length < 6) {
    console.log('Weak');
} else {
    console.log('Strong');
}

