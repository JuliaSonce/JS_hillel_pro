
function checkProbabilityTheory(count) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < count; i++) {
        let rundomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (rundomNumber % 2 === 0) {
            even = even + 1;
        } else {
            odd = odd + 1;
        }
    }
    let evenPercentage = even / count * 100;
    let oddPercentage = odd / count * 100;
    console.log(`“Percentage of even to odd numbers:” ${evenPercentage}% ${oddPercentage}% `)

}
checkProbabilityTheory(10)