'use strict';
// - Восстановить порядок в меню, добавить пятый пункт
// - Заменить картинку заднего фона на другую из папки img
// - Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
// - Удалить рекламу со страницы - Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let menu = document.getElementsByClassName('menu') [0] ,
    menuItem = document.getElementsByClassName('menu-item'),
    tit = document.getElementById ("title");

menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.background = "url('img/apple_true.jpg')";
title.textContent = 'Мы продаем только подлинную технику Apple';