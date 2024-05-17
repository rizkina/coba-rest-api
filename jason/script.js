// let siswa = {
// nama: "Rizki",
// nisn: "0123589",
// kelas: " X TKJ 1"
// }

// console.log(siswa);

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let siswa = JSON.parse(this.responseText);
//         console.log(siswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function (data) {
    console.log(data);
});