let num = +prompt('Введите число');

let week = [,
    "Понедельник", "Вторник",
    "Среда", "Четверг",
    "Пятница", "Суббота", "Воскресенье"
    ];

if (num < 1 || num > 7) {
    console.log('Incorrect format');
}
    
console.log(week[num]);
