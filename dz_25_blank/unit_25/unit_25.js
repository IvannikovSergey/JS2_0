// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

const URL = 'http://getpost.itgid.info/index2.php';
const KEY = '7859d9d42a8834141d529577207c9596';

function queryString(obj) {
    let out = '';
    for (let k in obj) {
        out += `&${k}=${obj[k]}`;
    }
    console.log(out);
    return out;
}

function xHRGet(param, out) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(out).innerHTML = this.responseText;
        }
    }
    xhr.open('GET', `${URL}?auth=${KEY}&${queryString(param)}`, true);
    xhr.send();
}

function xHRPost(param, out) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(out).innerHTML = this.responseText;
        }
    }
    xhr.open('POST', URL, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('auth=' + KEY + queryString(param));
}

function t1() {
    let param = {
        'action': 1
    };

    xHRGet(param, '.out-1');
}

document.querySelector('.b-1').onclick = t1; // ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    let param = {
        'action': 2,
        'name': 'Сергей'
    };
    xHRGet(param, '.out-2');
}

document.querySelector('.b-2').onclick = t2; // ваше событие здесь!!!


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
    let param = {
        'action': 3,
        'num1': 5,
        'num2': 10
    };
    xHRGet(param, '.out-3');
}

document.querySelector('.b-3').onclick = t3; // ваше событие здесь!!!


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    let param = {
        'action': 4,
        'num1': 5,
        'num2': 10
    };
    xHRGet(param, '.out-4');
}

document.querySelector('.b-4').onclick = t4; // ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    let param = {
        'action': 5
    };
    xHRGet(param, '.out-5');
}

document.querySelector('.b-5').onclick = t5; // ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    let param = {
        'action': 6,
        'num1': 5,
        'num2': 10
    };
    xHRGet(param, '.out-6');
}

document.querySelector('.b-6').onclick = t6; // ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    let param = {
        'action': 7
    };
    xHRGet(param, '.out-7');
}

document.querySelector('.b-7').onclick = t7; // ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    let param = {
        'action': 8,
        'year': 1985
    };
    xHRGet(param, '.out-8');
}

document.querySelector('.b-8').onclick = t8; // ваше событие здесь!!!


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    let param = {
        'action': 9,
        'm': 1,
        'd': 1,
        'y': 1
    };
    xHRGet(param, '.out-9');
}

document.querySelector('.b-9').onclick = t9; // ваше событие здесь!!!


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    let param = {
        'action': 1
    };
    xHRPost(param, '.out-10');
}

document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    let param = {
        'action': 2,
        'name': 'Сергей'
    };
    xHRPost(param, '.out-11');
}

document.querySelector('.b-11').onclick = t11; // ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    let param = {
        'action': 3,
        'num1': 5,
        'num2': 10
    };
    xHRPost(param, '.out-12');
}

document.querySelector('.b-12').onclick = t12; // ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    let param = {
        'action': 4,
        'num1': 5,
        'num2': 10
    };
    xHRPost(param, '.out-13');
}

document.querySelector('.b-13').onclick = t13; // ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    let param = {
        'action': 5
    };
    xHRPost(param, '.out-14');
}

document.querySelector('.b-14').onclick = t14; // ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    let param = {
        'action': 6,
        'num1': 5,
        'num2': 10
    };
    xHRPost(param, '.out-15');
}

document.querySelector('.b-15').onclick = t15; // ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    let param = {
        'action': 7
    };
    xHRPost(param, '.out-16');
}

document.querySelector('.b-16').onclick = t16; // ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    let param = {
        'action': 8,
        'year': 1985
    };
    xHRPost(param, '.out-17');
}

document.querySelector('.b-17').onclick = t17; // ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    let param = {
        'action': 9,
        'm': 1,
        'd': 1,
        'y': 1
    };
    xHRPost(param, '.out-18');
}

document.querySelector('.b-18').onclick = t18; // ваше событие здесь!!!