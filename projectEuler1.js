function main() {
    var t = parseInt(readLine());
    let nums = [];

    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        nums.push(n);
    };

    nums.forEach(n => {
        console.log(mults(n))
    })
}

function mults(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        };
    };

    return sum
};