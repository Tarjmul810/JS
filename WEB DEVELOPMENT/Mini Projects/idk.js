let num = [3, 2, 1];

const e = Math.floor(Math.random() * num.length);

const f = Math.floor(Math.random() * num.length);


if (num[e] > num[f]) {
    num[e] > num[f];
    console.log(`${num[e]} is greater than ${num[f]}`);
} else if (num[e] < num[f]) {
    console.log(`${num[e]} is less than ${num[f]};`);
} else {
    console.log(`Both are equal : ${num[e]}`)
};
