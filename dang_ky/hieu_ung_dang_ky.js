var user = document.querySelector("#userss");
var pass = document.querySelector("#pass");
var repass = document.querySelector("#repass");
var error = document.querySelector(".eror");
var btnlogin = document.querySelector("#btnlogin")

var users = [
    {
        id: 1,
        username: "dat",
        password: "dattop8"
    },
    {
        id: 2,
        username: "dacdat",
        password: "dattop7"
    },
    {
        id: 3,
        username: "nguyendat",
        password: "dattop6"
    }
]


btnlogin.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(users); 
   
 
    if (user.value.trim() == "") {
        error.innerHTML = "user không được để trống";
        return false;
    }
 
    if (pass.value.trim() == "") {
        error.innerHTML = "pass không được để trống";
        return false;
    }
    if (repass.value.trim() == "") {
        error.innerHTML = "repass không được để trống";
        return false;
    }
    if (pass.value != repass.value) {
        error.innerHTML = "pass sai nhập lại pass";
        return false;
    }

    if (check(user.value, pass.value)) {
        error.innerHTML = "đăng nhập thành công";
    }else{
        error.innerHTML = "Tài khoản không tồn tại";
    }
   
})


function check(user,pass) {
    let checked = false
    users.forEach(x => {
        if (x.username == user && x.password == pass) {
            checked = true;
        }
    });
    return checked;
}