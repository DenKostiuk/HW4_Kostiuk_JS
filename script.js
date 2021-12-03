let language = prompt('Введите язык');

if (language === 'ru') {
    console.log('Привет!');
} else if (language === 'en') {
    console.log('Hello!');
} else if (language === 'ua') {
    console.log('Привіт!');
} else {
    console.log(`I don't know this language`);
}

switch(language) {
    case 'ru':
        console.log('Привет!');
        break;
    case 'en':
        console.log('Hello!');
        break;
    case 'ua':
        console.log('Привіт!');
        break;
    default:
        console.log(`I don't know this language`);
}

