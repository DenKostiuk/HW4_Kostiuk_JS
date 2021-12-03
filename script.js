let num = +prompt('Введите число');

let week = [,
    "Понедельник", "Вторник",
    "Среда", "Четверг",
    "Пятница", "Суббота", "Воскресенье"
    ];

while (num < 1 || num > 7) {
    console.log('Incorrect format');
    break;
}
    
console.log(week[num]);