function tinhchiahet() {
    prompt("input1", "Nhap so a");
    prompt("input2", "Nhap so b");
    let a = "input1";
    a = parseInt(a);
    let b = "input2";
    b = parseInt(b);
    let c = (a % b);
    if (c == 0) {
        alert("a chia het cho b");
    } else {
        alert("a không chia hết cho b")
    }
}

function squarerectangle() {
    let inputwidth;
    let inputlength;
    inputwidth = prompt("Nhập chiều rộng");
    inputlength = prompt("Nhập chiều dài");
    let width = parseInt(inputwidth);
    let length = parseInt(inputlength);
    let area = (width * length);
    document.write("the square rectangle is " + area);
}

function tinhdiemtrungbinh() {
    let inputvatly;
    let inputhoa;
    let inputsinh;
    inputvatly = prompt("Nhập điểm Vật lý");
    inputhoa = prompt("Nhập điểm Hoá học");
    inputsinh = prompt("Nhập điểm Sinh học");
    let ly = parseFloat(inputvatly);
    let sinh = parseFloat(inputsinh);
    let hoa = parseFloat(inputhoa);
    let total = ly + sinh + hoa;
    let average = total / 3
    document.write("Điểm tổng là: " + total + '</br>');
    document.write("Điểm trung bình là: " + average);
}


function doinhietdo1() {
    let inputdoC;
    inputdoC = prompt("Nhập độ C");
    let C = parseFloat(inputdoC);
    let doF = (C * 9.00 / 5.00) + 32.00;
    document.write("Độ F bằng: " + doF);
}

function tinhdientichhinhtron() {
    let inputd1;
    inputd1 = prompt("Nhập đường kính hình tròn");
    let d1 = parseFloat(inputd1);
    let scircle = d1 * d1 * 3.14 / 4.00;
    document.write("Diện tích hình tròn bằng:" + scircle)
}

function tinhchuvihinhtron1() {
    let inputr;
    inputr = prompt("Nhập bán đường tròn cần tính");
    let r = parseFloat(inputr);
    let pcircle = r * 3.14;
    document.write("Chu vi hình tròn bằng:" + pcircle);
}


function chuyendoitiente() {
    let inputmount;
    inputmount = document.getElementById("input5").value;
    let inputm1;
    let inputm2;
    inputm1 = document.getElementById("f").value;
    inputm2 = document.getElementById("t").value;
    let m1 = parseFloat(inputm1);
    let m2 = parseFloat(inputm2);
    let mount = parseInt(inputmount);
    let d = mount * m1 / m2;
    document.getElementById("kq").innerText = "Result: " + d;
}

function add() {
    let num1;
    num1 = document.getElementById("input1").value;
    let n1 = parseFloat(num1)
    let num2;
    num2 = document.getElementById("input2").value;
    let n2 = parseFloat(num2)
    let result = n1 + n2
    document.getElementById("kq").innerText = "Result: " + result;
}

function sub() {
    let num1;
    num1 = document.getElementById("input1").value;
    let n1 = parseFloat(num1)
    let num2;
    num2 = document.getElementById("input2").value;
    let n2 = parseFloat(num2)
    let result = n1 - n2
    document.getElementById("kq").innerText = "Result: " + result;
}

function mul() {
    let num1;
    num1 = document.getElementById("input1").value;
    let n1 = parseFloat(num1)
    let num2;
    num2 = document.getElementById("input2").value;
    let n2 = parseFloat(num2);
    let result = n1 * n2;
    document.getElementById("kq").innerText = "Result: " + result;
}

function di() {
    let num1;
    num1 = document.getElementById("input1").value;
    let n1 = parseFloat(num1);
    let num2;
    num2 = document.getElementById("input2").value;
    let n2 = parseFloat(num2);
    let result = n1/n2;
    document.getElementById("kq").innerText = "Result: " + result;
}
