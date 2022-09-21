function thuong() {
    var a = parseInt(prompt("Nhập số a"));
    var b = parseInt(prompt("Nhập số b"));
    var thuong = a % b ;
    if (thuong == 0) {
        document.write("a là bội của b ");
    } else {
        document.write("a không phải là bội của b ");
    }
}