function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}



//베이직 숫자 키보드
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // 마지막 문자 삭제
}



document.addEventListener("keydown", function (event) {
    let display = document.getElementById("display");
    let key = event.key;

    // 숫자 및 연산자 입력 처리
    if (!isNaN(key) || "+-*/.".includes(key)) {
        display.value += key;
    } 
    // Enter 키로 계산 실행
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } 
    // Backspace 키로 한 글자 삭제
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } 
    // ESC 키로 전체 초기화
    else if (key === "Escape") {
        display.value = "";
    }
});



