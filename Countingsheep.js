function countSheeps(arrayOfSheep) {
    let count = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) count++
    })
    return count
}

