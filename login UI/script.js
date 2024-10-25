var password = document.getElementById('password');
var flag = 1;

function check(elem) {
    if (elem.value.length > 0) {
        if (elem.value != password.value) {
            document.getElementById('alert').innerText = "Confirm password does not match";
            flag = 0;
        } else {
            document.getElementById('alert').innerText = "";
            flag = 1;
        }
    } else {
        document.getElementById('alert').innerText = "Please enter your confirm password";
        flag = 0;
    }
}

function validate() {
    return flag === 1;
}