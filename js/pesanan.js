// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href = "../login.html"
}

// Key Pesanan per Akun
let keyPesanan = "pesanan_" + user.email
let keyCheckout = "checkout_" + user.email

// ambil data pesanan per akun
let data = JSON.parse(localStorage.getItem(keyPesanan)) || []
let tbody = document.getElementById("tabelPesanan")

function render(){
tbody.innerHTML = ""
let totalSemua = 0

data.forEach((item,index)=>{
        totalSemua += item.total
        tbody.innerHTML += `
        <tr>
        <td>${index+1}</td>
        <td>${item.nama}</td>
        <td>${item.harga}</td>
        <td>${item.qty}</td>
        <td>${item.meja}</td>
        <td>Rp ${item.total}</td>
        </tr>
        `
    })

    
}



// Nyimpen per akun
localStorage.setItem(keyPesanan, JSON.stringify(data))
render()


// Fungsi Selesaikan Pesanan
function selesaikan(){
    if(data.length === 0){
    alert("Tidak ada yang dipesan")
    return
}

let meja = prompt("Masukkan no meja:")
if(!meja){
alert("No meja harus diisi")
return
}

// simpan checkout per akun
localStorage.setItem(keyCheckout, JSON.stringify({
meja: meja,
pesanan: data,
user: user.nama
}))

window.location.href = "pembayaran.html"
}


render()