

const arr = [1, 1, 0, -1, -1]


function plusMinus(arr) {
    // Write your code here
    let positive = 0
    let negative = 0
    let zero = 0

    arr.map((number) => {
        return number > 0 ? positive++ : number < 0 ? negative++ : zero++
    })


    console.log(positive / arr.length)
    console.log(negative / arr.length)
    console.log(zero / arr.length)




}


console.log(plusMinus(arr))