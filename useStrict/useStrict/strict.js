

/*
 * 严禁模式下赋值给未声明的变量会报错
 */
function sum(numbers) {
  //  "use strict";
    sm = 0;
    for (var i = 0; i < numbers.length; i++) {
        sm += numbers[i];
    }
    return sm;
};


sum([1, 2, 4]);

/*
* 函数的形参使用的相同的标识符时会抛出异常
*/
function es3vsEs5(a, a, a) {
    //"use strict";
    console.log(arguments);
    return a;
    
}

es3vsEs5(2, 3, 6);

function swithcArgs(a, b) {
    "use strict";
    var c = b;
    b = a;
    a = c;
    return [].slice.call(arguments);
}
swithcArgs(2, 3);