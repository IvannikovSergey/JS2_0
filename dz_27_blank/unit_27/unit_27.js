const URL = 'http://getpost.itgid.info/index2.php';
const KEY = '7859d9d42a8834141d529577207c9596';

function queryString(obj) {
    let out = '';
    for (let k in obj) {
        out += `&${k}=${obj[k]}`;
    }
    return out;
}

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let param1 = {
        'action': 1
    };
    let param2 = {
        'action': 2,
        'name': 'Сергей'
    };

    let a = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param1)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    let b = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param2)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    Promise.all([a, b]).then(value => {
        console.log(value);
        document.querySelector('.out-1').textContent = value;
    });
}

document.querySelector('.b-1').onclick = t1; // ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let param1 = {
        'action': 3,
        'num1': 5,
        'num2': 10
    };
    let param2 = {
        'action': 4,
        'num1': 5,
        'num2': 10
    };

    let a = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param1)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    let b = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param2)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-2').textContent = value;
    });
}
document.querySelector('.b-2').onclick = t2; // ваше событие здесь!!!


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let param1 = {
        'action': 5
    };
    let param2 = {
        'action': 6,
        'num1': 5,
        'num2': 10
    };

    let a = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param1)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    let b = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param2)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-3').textContent = value;
    });
}

document.querySelector('.b-3').onclick = t3; // ваше событие здесь!!!


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let param1 = {
        'action': 7
    };
    let param2 = {
        'action': 8,
        'year': 1985
    };

    let a = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param1)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    let b = new Promise((resolve, reject) => {
        fetch(`${URL}?auth=${KEY}${queryString(param2)}`)
            .then(data => {
                resolve(data.text());
            });
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-4').textContent = value;
    });
}

document.querySelector('.b-4').onclick = t4; // ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let param1 = {
        'action': 1
    };
    let param2 = {
        'action': 2,
        'name': 'Сергей'
    };
    let a = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param1)}`
            })
            .then(data => resolve(data.text()));
    });

    let b = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param2)}`
            })
            .then(data => resolve(data.text()));
    });
    Promise.all([a, b]).then(value => {
        document.querySelector('.out-5').textContent = value;
    });
}

document.querySelector('.b-5').onclick = t5; // ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let param1 = {
        'action': 3,
        'num1': 5,
        'num2': 10
    };
    let param2 = {
        'action': 4,
        'num1': 5,
        'num2': 10
    };
    let a = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param1)}`
            })
            .then(data => resolve(data.text()));
    });

    let b = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param2)}`
            })
            .then(data => resolve(data.text()));
    });
    Promise.all([a, b]).then(value => {
        document.querySelector('.out-6').textContent = value;
    });
}

document.querySelector('.b-6').onclick = t6; // ваше событие здесь!!!


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let param1 = {
        'action': 5
    };
    let param2 = {
        'action': 6,
        'num1': 5,
        'num2': 10
    };
    let a = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param1)}`
            })
            .then(data => resolve(data.text()));
    });

    let b = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param2)}`
            })
            .then(data => resolve(data.text()));
    });
    Promise.all([a, b]).then(value => {
        document.querySelector('.out-7').textContent = value;
    });
}

document.querySelector('.b-7').onclick = t7; // ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let param1 = {
        'action': 7
    };
    let param2 = {
        'action': 8,
        'year': 1985
    };
    let a = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param1)}`
            })
            .then(data => resolve(data.text()));
    });

    let b = new Promise((resolve, reject) => {
        fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `auth=${KEY}${queryString(param2)}`
            })
            .then(data => resolve(data.text()));
    });
    Promise.all([a, b]).then(value => {
        document.querySelector('.out-8').textContent = value;
    });
}

document.querySelector('.b-8').onclick = t8; // ваше событие здесь!!!