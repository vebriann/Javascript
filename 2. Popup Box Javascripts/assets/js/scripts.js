alert("Hallo Master");



// fungsi prompt itu sama seperti alert cuman bedanya prompt dapat memunculkan textbox atau inputan
prompt("Nama Mu: ");



// prompt di dalam variable berfungsi untuk mengambil nilai yang terinput pada prompt tersebut

var inputNama = prompt("Nama Mu: ");
alert("Namamu adalah " + inputNama);



// fungsi confirm adalah meminta konfirmasi yes ( ya ) atau no ( cancel ) dari user
confirm("apakah anda ingin lanjut? ");



// contoh program menggunakan confirm 
// operator === berguna untuk mengindentifikasi sebuah variabel, apakah variabel itu bernilai true atau false
var inputan = confirm("apakah anda ingin lanjut? ");

if (inputan === true) { 
    alert("anda berhasil melanjutkan")
}
else {
    alert("anda telah cancel program")
}