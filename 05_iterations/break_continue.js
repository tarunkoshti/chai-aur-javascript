// for (let i = 0; i <= 10; i++) {
//     j = 5
//     if (i == 2) {
//         if (j == 5) {
//             console.log("5 detected")
//             break;
//         }
//         console.log("2 detected")
//     }
//     console.log(i)
// }
for (let i = 0; i <= 10; i++) {
    j = 5
    if (i == 2) {
        if (j == 5) {
            console.log("5 detected")
            continue;
        }
        console.log("2 detected")
}
console.log(i)
}