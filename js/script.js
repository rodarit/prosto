
document.getElementById('reset1').onclick = function () {
    createPR(100);
}

function createPR(size) {
    var line = [2, 3, 5];
    var p = 1;
    var m = 5;

    while (m < size) {
        p += 6;
        m += 6;
        if (p % 5 != 0 && p % 7 != 0 && p % 11 != 0 && p % 13 != 0 && p % 17 != 0)
        { line.push(p); };
        if (m % 5 != 0 && m % 7 != 0 && p % 11 != 0 && p % 13 != 0 && p % 17 != 0)
        { line.push(m); };
    }
    console.log(line);

}