// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href = "../login.html"
}

// key per akun
let keyCheckout = "checkout_" + user.email

// ambil data checkout per akun
let checkout = JSON.parse(localStorage.getItem(keyCheckout))

if(!checkout){
    alert("Data tidak ditemukan")
    window.location.href = "dashboard.html"
}

// tampilkan info akun
document.getElementById("infoUser").innerHTML =
"Orderer Name: " + user.username + " (" + user.email + ")"

document.getElementById("infoMeja").innerHTML =
"Table Number: " + checkout.meja

let tbody = document.getElementById("listPesanan")
let total = 0

checkout.pesanan.forEach(item => {

    total += item.total

    tbody.innerHTML += `
    <tr>
        <td>${item.nama}</td>
        <td>${item.qty}</td>
        <td>Rp ${item.total}</td>
    </tr>
    `
})

document.getElementById("totalAkhir").innerHTML =
"TOTAL PAYMENT : Rp " + total