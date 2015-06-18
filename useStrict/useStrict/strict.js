

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
/*
 *ES3中，arrgument 对象和函数的形参共享一个动态的关系
 */
function swithcArgs(a, b) {
    //  "use strict";
    var c = b;
    b = a;
    a = c;
    return [].slice.call(arguments);
}
console.log(swithcArgs(2, 3));

/*
* ES5中删除未成功 抛出异常  ES3中着返回boolean  
*/
function deleteStatic(a, b) {
    "use strict";
    var a = { val: 3 };
    delete a.val;
}
 