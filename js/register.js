function register(){

let username = document.getElementById("username").value.trim()
let email = document.getElementById("ponsel").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!username || !email || !password){
    alert("Semua data harus diisi")
    return false
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cek duplikat email
let cek = akun.find(user => user.email === email)

if(cek){
    alert("email sudah terdaftar")
    return false
}

// simpan user
let user = {
    username,
    email,
    password
}

akun.push(user)
localStorage.setItem("akun", JSON.stringify(akun))

alert("Registrasi berhasil")

//pindah ke halaman login setelah registrasi
window.location.href = "login.html"

return false
}