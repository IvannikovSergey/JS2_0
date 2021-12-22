let a1_res = [], a2_res = [], a3_res = [], a4_res = [], a5_res = [], a6_res = [], a7_res = [], a8_res, a9_res = '', a10_res = '';

// Task 1 ============================================
/* <p>Дан массив a1 = [4,5,6,7,12,34,56,78,90,11] - с помощью forEach переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Действия должны запускаться при вызове функции t1.</p> */

function t1() {
    let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
    a1.forEach(elem => {
        a1_res.push(elem * 2);
    });
    document.querySelector('.out-1').innerHTML = a1_res;
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/*  Дан массив a1 = [2,3,4,5,10,11,12] - с помощью forEach переберите массив и
 создайте новый массив a2_res куда добавьте элементы данного массива деленные на 2. Действия должны
запускаться при вызове функции t2.*/

function t2() {
    a2_res = [];
    let a1 = [2, 3, 4, 5, 10, 11, 12];
    a1.forEach(elem => {
        a2_res.push(elem / 2);
    });
    document.querySelector('.out-2').innerHTML = a2_res;
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  Дан массив a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'] - с помощью forEach переберите массив и создайте новый массив a3_res куда добавьте элементы данного массива являющиеся числом. Запускаться решение должно при вызове функции t3.*/

function t3() {
    a3_res = [];
    a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
    a3.forEach(elem => {
        if (typeof elem == 'number') {
            a3_res.push(elem);
        }
    });
    document.querySelector('.out-3').innerHTML = a3_res;
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res  Запускаться решение должно при вызове функции t4.*/

function t4() {
    a4_res = [];
    let a = document.getElementsByClassName('task-4');
    Array.from(a).forEach(elem => {
        a4_res.push(elem.getAttribute('data'));
    });
    document.querySelector('.out-4').innerHTML = a4_res;
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.*/

function t5() {
    a5_res = [];
    a5_res.push(this.getAttribute('data'));
    document.querySelector('.out-5').innerHTML = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});



// Task 6 ============================================
/*  Дана строка str6='helloworld' - преобразуйте ее в массив и присвойте a6_res. Выведите на страницу. Запускаться решение должно при вызове функции t6. */


function t6() {
    a6_res = [];
    str6 = 'helloworld';
    let tmp = str6.split('');
    a6_res = tmp;
    document.querySelector('.out-6').innerHTML = a6_res;
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  Дана строка str7='hello world hi mazai' - преобразуйте ее в массив и разбейте по словам. Причем слова не должны содержать пробелов и присвойте a6_res. выведите на страницу.  Запускаться решение должно при вызове функции t7. */

function t7() {
    str7 = 'hello world hi mazai';
    let tmp = str7.split(' ');
    a7_res = tmp;
    document.querySelector('.out-7').innerHTML = a7_res;
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*  Дан массив a8 = [1,2,66,77,15] - преобразуйте ее в строку. Разделитель - дефис. Результат присвойте a8_res. Запускаться решение должно при вызове функции t8. */


function t8() {
    a8_res = [];
    a8 = [1, 2, 66, 77, 15];
    let str = a8.join('-');
    a8_res = str;
    console.log(a8_res);
}

document.querySelector('.b-8').onclick = t8;


// Task 9 ============================================
/*  Дан массив a9 = [[hi, mahai], [test, best]] - преобразуйте его в строку. Разделитель - дефис. Результат присвойте a9_res. Запускаться решение должно при вызове функции t9. Допускается лишний дефис в конце строки!!! */

function t9() {
    a9_res = [];
    a9 = [['hi', 'mahai'], ['test', 'best']];
    let tmp = a9.join(',');
    tmp = tmp.split(',');
    a9_res = tmp.join('-');
    document.querySelector('.out-9').innerHTML = a9_res;
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Дан массив a10 = {name: ivan, age: 15, sex: 1, id: 45} - преобразуйте его в query строку ( так передаются GET параметры). Найдите описание что такое query строка самостоятельно. Разделитель - амперсанд. Результат присвойте a10_res. Запускаться решение должно при вызове функции t10. Допускается лишний амперсанд в конце строки!!! */

function t10() {
    a10_res = [];
    a10 = { name: 'ivan', age: 15, sex: 1, id: 45 };
    let out = '';
    for (let k in a10) {
        out += `${k}:${a10[k]}&`;
    }
    a10_res = `?${out}`;
    console.log(a10_res);
}

document.querySelector('.b-10').onclick = t10;