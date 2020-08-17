function bai1() {
    let i = 0;
    var x = setInterval(function () {
        i++;
        document.getElementById('bai1').innerText = i + 'seconds';
        if (i >= 100) {
            clearInterval(x);
            alert('Hoan thanh');
        }
    }, 100);
}

function bai2() {
    let mess = 'Vui long nhap nhiet do';
    let temp = +0;
    do {
        temp = +prompt(mess, '');
        if (temp > 100) {
            mess = 'Hay giam nhiet do';
        } else if (temp < 20) {
            mess = 'Hay tang nhiet do';
        }
    } while (temp > 100 || temp < 20);
    document.getElementById('bai2').innerText = 'Nhiet do hien tai la: ' + temp;
}

function bai3() {
    let i = +1;
    let j = +1;
    document.getElementById('bai3').innerText = "1, 1";
    for (k = 0; k < 18; k++) {
        let temp = i + j;
        i = j;
        j = temp;
        document.getElementById('bai3').innerText += ", " + j;
    }
}

function bai4() {
    let i = +1;
    let j = +1;
    while (j % 5 != 0) {
        let temp = i + j;
        i = j;
        j = temp;
    }
    document.getElementById('bai4').innerText = j;
}

function bai5() {
    let i = +1;
    let j = +1;
    let sum = 2;
    for (k = 0; k < 18; k++) {
        let temp = i + j;
        i = j;
        j = temp;
        sum += temp;
    }
    document.getElementById('bai5').innerText = 'Tong 20 so Fibonacci dau tien la: ' + sum;
}

function bai6() {
    let amount = +30;
    let sum = (amount + 1) * amount * 7 / 2;
    document.getElementById('bai6').innerText = 'Tong cua ' + amount + ' so dau tien chia het cho 7 la: ' + sum;
}

function bai7() {
    let doc = document.getElementById('bai7')
    for (i = +1; i <= 100; i++) {
        if (i % 3 == 0) {
            doc.innerText += 'Fizz';
            if (i % 5 == 0) doc.innerText += 'Buzz, ';
            else doc.innerText += ', ';
        } else if (i % 5 == 0) doc.innerText += 'Buzz, ';
        else doc.innerText += i + ', ';
    }
}

function bai8() {
    let a = +prompt('Hay nhap can duoi', '');
    let b = +prompt('Hay nhap can tren', '');
    let result = Math.floor(Math.random() * (b - a) + a);
    for (i = 0; i < 3; i++) {
        let guess = +prompt('Ban con ' + (3-i) + ' lan doan', '');
        if (guess == result) {alert('Ban la nguoi chien thang'); break;}
        else {
            if (guess < result) alert('So do lon hon ban du doan');
            else alert('So do nho hon ban du doan');
            if(i==2) alert('Chuc ban may man lan sau');
        }
    }
}