var score = 0,
    wrong = 0,
    right = 0;
if (document.getElementsByClassName('section-lbl')[0].innerText.substring(10, 11) === "Q") {
    for (var i = 0; i < 100; i++) {
        if (document.getElementsByClassName('menu-tbl')[i].getElementsByTagName('tr')[2].innerText.substring(16, 20) === '--') {
            continue;
        }
        if (document.getElementsByClassName('menu-tbl')[i].getElementsByTagName('tr')[2].innerText.substring(16, 17) === document.getElementsByClassName('rightAns')[i].innerText.substring(0, 1)) {
            score += 2;
            right++;
        } else {
            score -= .5;
            wrong++;
        }
    }
} else {
    for (var i = 0; i < 200; i++) {
        if (document.getElementsByClassName('menu-tbl')[i].getElementsByTagName('tr')[2].innerText.substring(16, 20) === '--') {
            continue;
        }
        if (document.getElementsByClassName('menu-tbl')[i].getElementsByTagName('tr')[2].innerText.substring(16, 17) === document.getElementsByClassName('rightAns')[i].innerText.substring(0, 1)) {
            score += 2;
            right++;
        } else {
            score -= .5;
            wrong++;
        }
    }
    score /= 2;
}
console.log('score = ' + score)
console.log('right = ' + right)
console.log('wrong = ' + wrong)
alert(score)
