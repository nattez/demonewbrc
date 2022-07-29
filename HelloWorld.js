// var x = 20
// console.log('hallo semua') // munculin sesuatu di console
// console.log('x adalah ' + x)

// POPUP BOX
//========================

// alert('Hello World!')
// alert('Hello World!')
// alert('Hello World!')
// alert('Hello World!')
// var nama = prompt('Masukkan!!!')
// var ngecek = confirm(nama + ' benar ini kamu?')
// console.log('namanya adalah ' + nama)
// console.log(ngecek)

// PENGKONDISIAN DAN PERULANGAN
//========================

// if(ngecek == true){
//     alert('true')
// }else{
//     alert('false')
// }

// do{
//     nama = prompt('Masukkan!!!')
//     ngecek = confirm(nama + ' benar ini kamu?')
// }while(ngecek == false)
// alert('Selamat Datang...')

// var i = 1
// while(i != 11){
//     alert(i + 'hello world')
//     i++
// }

// var pilihan
// var x = 1
// while(x == 1){
// pilihan = prompt('Masukkan angka 1 - 10')
//     switch(pilihan){
//         case "1":
//             alert('Nomor 1')
//         break
//         case "2":
//             alert('Nomor 2')
//         break
//         case "3":
//             alert('Nomor 3')
//         break
//         case "4":
//             alert('Nomor 4')
//         break
//         case "5":
//             alert('Nomor 5')
//         break
//         case "6":
//             alert('Nomor 6')
//         break
//         case "7":
//             alert('Nomor 7')
//         break
//         case "8":
//             alert('Nomor 8')
//         break
//         case "9":
//             alert('Nomor 9')
//         break
//         case "10":
//             alert('Nomor 10')
//         break
//         case null:
//             x = 2
//         break
//         default:
//             alert('Angka tidak valid')
//         break    
//     }
// }

// SUIT Cara 1
//========================

// var pilihanKomputer, pilihanPengguna, acak, x
// x = 1
// while(x == true){
//     pilihanPengguna = prompt('Pilihannya : Batu, Gunting, Kertas \nPilihanmu :')
//     acak = Math.random();
//     if(acak <= 0.3){
//         pilihanKomputer = 'Batu'
//     }else if(acak > 0.3 && acak <= 0.6){
//         pilihanKomputer = 'Gunting'
//     }else{
//         pilihanKomputer = 'Kertas'
//     }
//     if(pilihanPengguna == pilihanKomputer){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : SERI!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Kertas' && pilihanKomputer == 'Batu'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu MENANG!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Batu' && pilihanKomputer == 'Kertas'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu KALAH!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Gunting' && pilihanKomputer == 'Kertas'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu MENANG!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Kertas' && pilihanKomputer == 'Gunting'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu KALAH!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Batu' && pilihanKomputer == 'Gunting'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu MENANG!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == 'Gunting' && pilihanKomputer == 'Batu'){
//         alert('Pengguna : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : Kamu KALAH!!')
//         x = confirm('MAU SUIT LAGI ?')
//     }else if(pilihanPengguna == null){
//         break
//     }else{
//         x = confirm('Pilihan tidak valid\nULANG LAGI ?')
//     }    
// }

// SUIT Cara 2
//========================

// var pilihanKomputer, pilihanPengguna, acak, x, hasil
// x = true
// while(x){
//     pilihanPengguna = prompt('Pilihannya : Batu, Gunting, Kertas \nPilihanmu :')
//     acak = Math.random();
//     if(acak <= 0.3){
//         pilihanKomputer = 'Batu'
//     }else if(acak > 0.34 && acak <= 0.68){
//         pilihanKomputer = 'Gunting'
//     }else{
//         pilihanKomputer = 'Kertas'
//     }
//     if(pilihanPengguna == pilihanKomputer){
//         hasil = 'SERI!!'
//     }else if(pilihanPengguna == 'Batu'){
//         hasil = (pilihanKomputer == 'Gunting') ? 'MENANG!!' : 'KALAH'
//     }else if(pilihanPengguna == 'Kertas'){
//         hasil = (pilihanKomputer == 'Batu') ? 'MENANG!!' : 'KALAH'
//     }else if(pilihanPengguna == 'Gunting'){
//         hasil = (pilihanKomputer == 'Kertas') ? 'MENANG!!' : 'KALAH'
//     }else if(pilihanPengguna == null){
//         break
//     }else{
//         hasil = 'Kamu Gajelas. Masukin Pilihan Yang Bener'
//     }
//     alert('Pilihanmu : ' + pilihanPengguna + '\nKomputer : ' + pilihanKomputer + '\nHasilnya : KAMU ' + hasil)
//     x = confirm('MAU SUIT LAGI ?')
// }

// ARGUMENTS
//========================

// function entah(){
//     var hasil = 0
//     for(var i = 0; i < arguments.length; i++){
//         hasil += arguments[i]
//     }
//     return hasil
// }
// var nilai = entah(9,8,9,5,8)
// console.log(nilai)

// REKURSIF
//========================

// function cetakAngka(n){
//     if(n == 0){
//         return;
//     }
//     console.log(n)
//     cetakAngka(n-1)
// }
// cetakAngka(10)

//faktorial
// function faktorial(n){
//     if(n == 0) return 1
//     console.log(n)
//     return n * faktorial(n-1)
// }
// console.log(faktorial(5))

// FUNCTION EXPRESSION
//========================

// var tampilPesan = function (nama) {
//     console.log('halo' + nama)
// }
// tampilPesan('rasikh')

// ARRAY
//========================

// var binatang = ['monyet','biawak','capung','keledai']
// var hewan
// var randomaja = [0,'sering keluar',true,'sendiri aja']
// var arrdalamarr = [5,6,4,[5,3,6]]

// hewan = ['kumbang','serigala','kupu']
// console.log(hewan[2])
// console.log(typeof(binatang))
// console.log(hewan.length)
// console.log(randomaja[1])
// console.log(arrdalamarr[3][1])

// MANIPULASI ARRAY
//========================

// var arr = [];
// // 1. menambah isi array
// arr[0] = 0
// arr[1] = 8
// arr[2] = 5
// arr[3] = 2
// console.log(arr[0])
// // 2. menghapus isi array
// arr[1] = undefined
// console.log(arr)
// // 3. menampilkan isi array
// for(var i = 0;i < arr.length; i++){
//     console.log(arr[i])
// }

// Method pada array
// ==============================
// 1. join = menggabungkan seluruh isi array dan mengubahnya menjadi string
// 2. push, pop, shift, unshift
// 3. slice, splice
// 4. foreach, map = looping pada array
// 5. filter, find

// join, push, pop, shift, unshift, slice, splice
// ----------------------------------------------
// splice(indexawal, maudihapusberapa, elemenbaru1, elemenbaru2, ...)
// slice(awal, akhir)

// var kkk = ['rasikh', 'khalil', 'pasha']
// kkk.pop()
// kkk.push('karyoto','nurhayani')
// kkk.unshift('namaku')
// kkk.shift()
// kkk.splice(3, 0, ", namaku", "adalah")

// console.log(kkk.join(' '))
// var jjj = kkk.slice(2, 4)
// console.log(jjj.join(' '))

// forEach, map
// --------------------------
// var nomor = [1,2,3,4,5,6,7,8,9]
// var nama = ['rasikh','khalil','pasha']
// nomor.forEach(function(e){
//     console.log(e)
// })
// nama.forEach(function(e, i){
//     console.log('nama ke-' + (i+1) + ' adalah ' + e)
// })

// var nomor = [1,2,3,4,5,6,7,8,9]
// var nomor2 = nomor.map(function(e){
//         return e * 9
//     })
// console.log(nomor2.join(' '))

// sort
// ----------------------------
// var angka = [3,5,20,6,7,8,9,6,5,3]
// angka.sort(function(a,b){
//     return a-b
// })
// console.log(angka.join(' '))

// filter, find
// -------------------------------
// var angka = [2,2,6,9,7,597,3,1,5]
// var angka2 = angka.find(function(x){
//     return x > 6
// })
// var angka3 = angka.filter(function(x){
//     return x > 6 
// })
// console.log(angka2)
// console.log(angka3)

// OBJECT
//=================================

// Object Literal
//---------------------------------

// var mhs = {
//     nama : "Rasikh",
//     semester : 2,
//     domisili : "Bintan",
//     nilai : [9.00, 8.76, 7.76],
//     alamat : {
//         jalan : 'Jl. Langsat no. 62',
//         Desa : 'Sebong Lagoi',
//         Kecamatan : 'Teluk Sebong',
//         Kabupaten : 'Bintan'
//     }
// }

// Function Declaration
//------------------------------------

// function buatObjectMahasiswa(nama, nrp, email, jurusan){
//     var mhs = {}
//     mhs.nama = nama
//     mhs.nrp = nrp
//     mhs.email = email
//     mhs.jurusan = jurusan
//     return mhs
// }
// var mhs3 = buatObjectMahasiswa('Rasikh', 'dfdddfdfdfd','rasikh@gmail.com','teknik pijat')


// Constructor
//--------------------------------

// function Mahasiswa(nama, nrp, email, jurusan){
//     // var this = {}
//     this.nama = nama
//     this.nrp = nrp
//     this.email = email
//     this.jurusan = jurusan
//     // return this 
// }
// var mhs4 = new Mahasiswa('Rasikh','242323','radgmail','teknik mouse')

// THIS
//=============================

// 1. function declaration

// function halo(){
//     console.log(this)
//     console.log('halo')
// }

// halo()

//--> this megembalikan object Global

// 2. Object literal
// var obj = {a : 20, nama : 'rasikh'}
// obj.halo = function halo(){
//     console.log(this)
//     console.log('halo')
// }

// obj.halo()

//--> this mengembalikan object yang bersangkutan
    
// 3. Constructor
// function Halo(){
//     console.log(this)
//     console.log('halo')
// }

// var obj1 = new Halo()
// var obj2 = new Halo()
// this mengembalikan object yang baru dibuat

// TIMING EVENTS
//======================
// setTimeout() -> menjalankan program setelah kita menunggu beberapa waktu, tergantung waktu yang kita set
    
// function tampilkanPesan(){
//     console.log('halo')
// }

// const kocak = setTimeout(function(){
//     console.log('mantep')
// }, 5000)

// const tombol = document.querySelector('button')
// tombol.addEventListener('click',function(){
//     clearTimeout(kocak)
// })


// setInterval() -> menjalankan program dalam interval waktu tertentu

// const kocak = setInterval(function(){
//     console.log('mantep')
// }, 2000);

// const tombol = document.querySelector('button')
// tombol.addEventListener('click',function(){
//     clearInterval(kocak)
// })

// Program hitung mundur


const tglTujuan = new Date('Jul 28, 2022 10:47:00').getTime()
const p = document.querySelector('p')
const hitungMundur = setInterval(function(){
    
    const sekarang = new Date().getTime()
    const selisih =  (tglTujuan - sekarang) 
    const jam = Math.floor((selisih / 1000) / 3600)
    const menit = Math.floor(((selisih / 1000) - (3600 * jam)) / 60)
    const detik = Math.floor(((selisih / 1000) - (3600 * jam)) - (60 * menit))
    p.innerHTML = '' + jam + ':' + menit + ':' + detik + ''

    if(selisih < 0){
        clearInterval(hitungMundur)
        p.innerHTML = 'waktu habis'
    }
}, 1000);

const tombol = document.querySelector('button')
tombol.addEventListener('click',function(){
    clearInterval(hitungMundur)
})


