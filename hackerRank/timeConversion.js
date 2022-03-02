let x = "12:00:43AM"
function timeConversion(s) {
    let t = (s.substring(0, 2) * 1)
    let r = (s.substring(2, 8))
    let AmPm = (s.substring(8, 10).toUpperCase())

    if (AmPm == "PM" && (t < 12))
        return ((t + 12) + r)
    if (t == 12 && AmPm == "PM") return ("12" + r)


    if (AmPm == "AM" && (t < 10)) {
        return ("0" + (t) + r)
    } else {

        if (t == 12) return ("00" + r)
        else { return (t + r) }
    }
}
// if (t < 12) { return ((t + 12) + r) }
// else { return ((t - 12) + r) }

// return ("0" + (t) + r)


console.log(timeConversion(x));

console.log(x.substring(0, 2))
console.log(x.substring(8, 10))
