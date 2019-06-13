const apples = 14;
console.log(apples);

console.log(`I have ${apples} apples.`);


const materials = ['wood', 'metal', 'stone'];
const words = {
    'elephant': "The world's largest land mammal.",
    'school': 'A place of learning.',
    'ice cream': 'A delicious milk-based dessert.',
};
console.log(materials);
console.log(words);


let num = 16;

if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log(`${num} must be less than 10.`);
}


for (i = 0; i < 10; i++) {
    console.log('Doing the same thing over and over.');
}


const base = 5;
for (i=0; i < 20; i++) {
    console.log(i + base);
}


total = 0;
for (i=0; i < 100; i++) {
    total += i
}

console.log(total)


for (h=3; h < 15; h++) {
    if (h > 9) {
        console.log('You can get on the rollercoaster!');
    } else {
        console.log('You are too short to ride this rollercoaster.');
    }
}


const containers  = ['purse', 'wallet', 'backpack'];
for (let index = 0; index < containers.length; index++) {
    console.log(containers[index]);
}


function hello_world() {
    console.log('Hello World!');
}
hello_world();


function add(first_num, second_num) {
    const result = first_num + second_num;
    return result;
}
amount = add(5,7);
console.log(amount);