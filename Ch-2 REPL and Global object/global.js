console.log("File Location : ", __filename);
console.log("Directory Location : ", __dirname);


setTimeout(() => {
    console.log("Hello Node JS");
}, 1000);

let totalSecond = 120;

const interval = setInterval(() => {
    // console.log("Hello JavaScript", num++);
    totalSecond--;

    if (totalSecond === 0) {
        clearInterval(interval);
        return;
    }

    let minutes = Math.floor(totalSecond / 60); // 119 / 60 = 1
    let second = totalSecond % 60; // 119 % 60 = 59

    console.log(`${minutes} : ${second}`); // 1 : 0

}, 1000);
// 00 : 00

console.log(process.platform);

