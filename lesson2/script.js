/**
 *  Get both operands
 * @returns {Array|[*,*]}
 */
function getOperands() {
    var num1, num2, arr;

    // get first operand
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    // get second operand
    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    // set operands at the array
    arr = [num1, num2];

    return arr;
}

/**
 * First plus second operands
 */
function plus() {
    var arr;
    arr = getOperands();

    out = arr[0] + arr[1];

    // set result
    document.getElementById('out').innerHTML = out;
}

/**
 * First minus second operands
 */
function minus() {
    var arr;
    arr = getOperands();

    out = arr[0] - arr[1];

    // set result data
    document.getElementById('out').innerHTML = out;
}

/**
 * First multiplication second operands
 */
function multiplication() {
    var arr;
    arr = getOperands();

    out = arr[0] * arr[1];

    // set result data
    document.getElementById('out').innerHTML = out;
}
