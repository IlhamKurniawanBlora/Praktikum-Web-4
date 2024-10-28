const paragraf = document.querySelector("#demo");

const nama = "ilham kurniawan";
const umur = 22;
const sudahMenikah = true;

const hasilTambah = umur + 5
const hasilKali = umur * 2
if (sudahMenikah) {
    teks = "saya sudah menikah"
} else {
    teks = "saya belum menikah"
}
paragraf.innerHTML = `nama saya ${nama}, umur saya ${umur} dan ${teks}`

console.log(hasilTambah)
console.log(hasilKali)
alert(hasilKali)

if (umur >= 18) {
    console.log(`nama : ${nama} dan saya sudah dewasa`)
} else {
    console.log(`nama : ${nama} dan saya belum dewasa`)
}

for (const i = 0; i < 5; i++) {
    console.log(`Perulangan ke ${i}`)
}

function luasPersegi(sisi) {
    return sisi * sisi
}

const sisi = 4
const luas = luasPersegi(sisi)
console.log(`Luas persegi dengan sisi ${sisi} adalah ${luas}`)

// biome-ignore lint/complexity/useArrowFunction: <explanation>
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Tombol telah di Klik!";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});
