

const arr = [1, 3, 9, 7, 5]


function miniMaxSum(arr) {



    const arrSorted = arr.sort()

    const min = arrSorted.reduce((acc, num, index) => {
        if (index < 4) {
            return acc + num
        }
        return acc
    }, 0)

    const max = arrSorted.reduce((acc, num, index) => {
        if (index > 0) {
            return acc + num
        }
        return acc
    }, 0)

    console.log(min, max)
    return arrSorted

}


console.log(miniMaxSum(arr))

