
function bai1(){
    let i=0;
    var x= setInterval(function(){
       i++;
       document.getElementById('bai1').innerText= i + 'seconds';
       if (i>=100){
           clearInterval(x);
           alert('Hoan thanh');
       }
    }, 100);
}

function bai2(){
    let mess= 'Vui long nhap nhiet do';
    let temp= +0;
    do {
        temp = +prompt(mess, '');
        if (temp > 100) {mess= 'Hay giam nhiet do';}
        else if (temp < 20) {mess= 'Hay tang nhiet do';}
    }while(temp>100 || temp<20);
    document.getElementById('bai2').innerText= 'Nhiet do hien tai la: '+temp;
}

function bai3(){
    i= +1;
    j= +1;
    document.getElementById('bai3').innerText= "1, 1";
    for (k=0; k<18; k++){
        let temp= i+j;
        i= j;
        j= temp;
        document.getElementById('bai3').innerText+= ", "+j;
    }
}

function bai4(){
    i= +1;
    j= +1;
    while(j%5!=0){
        let temp= i+j;
        i= j;
        j= temp;
    }
    document.getElementById('bai4'). innerText= j;
}