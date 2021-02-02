function assignGrade(score) {
    if (score >= 91) {
        return 'A';
    } else if (score >= 85) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 66) {
        return 'D';
    } else if (score >= 60) {
        return 'F';
    }
}

for (var n = 60; n <= 100; n++) {
    console.log('For ' + n + ', you got a ' + assignGrade(n));
  }