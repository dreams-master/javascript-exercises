function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 60) {
        return "D";
    } else {
        return "F"
    }
}

console.log(assignGrade(99));
console.log(assignGrade(82));
console.log(assignGrade(76));
console.log(assignGrade(64));
console.log(assignGrade(15));
