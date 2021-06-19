function a() {
    console.log('a start');
    b();
    console.log('a end');
}

function b() {
    console.log('b start');
    c();
    console.log('b end');
}

function c() {
    console.log('c start');
    console.log('c end');
}

a();
/**
 * Call Stack
 * **************************
 *  c()  1.pop              *
 *  b()  2.pop              *
 *  a()  3.pop              *
 * **************************
 */
