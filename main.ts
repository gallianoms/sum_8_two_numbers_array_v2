export {}

// const arr = [1,3,6,9] // False
const arr = [1, 6, 2, 10] // True 6 + 2 = 8

const sum = (arr, num) => {
  const complements = arr.map(item => num - item)
  return arr.some((item, idx) => {
    while (idx < complements.length) {
      if (item === complements[idx + 1]) return true
      idx++
    }
    return false
  })
}

console.log(sum(arr, 8)) // complements [ 7, 2, 6, -2 ]
