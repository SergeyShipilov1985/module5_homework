const result = +prompt('Введите значение')
if  (typeof result !== 'number'){
    alert('Упс,кажется, Вы ошиблись')
}
else if (result % 2 == 0){
    alert('Число чётное')
}
else {
    alert('Число нечётное')
}