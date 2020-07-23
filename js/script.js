let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let btnSubmit = document.querySelector("#btn_submit");
let txtcomment = document.querySelector('#text_comment');
let message = document.querySelector('.message');

btnSubmit.onclick = function(e) {
    e.preventDefault();
    if (name.value == "" || phone.value == "" || email.value == "" || txtcomment.value == "") {
        message.innerHTML = 'Заполните все поля';
    } else if (!validateNumber(phone.value)) {
        message.innerHTML = 'Введите корректный номер';
    } else if (!validateMail(email.value)) {
        message.innerHTML = 'Введите корректный адрес электронной почты';
    } else {
        let params = 'name=' + name.value + '& phone=' + phone.value + '& email=' + email.value + '& text_comment=' + txtcomment.value;
        ajaxSend('../send.php', params, function(data) {
            message.innerHTML = data;
        });
    }
}

function validateNumber(phone) {
    let template = /^(\+7|8)(\d{10}|\s(\(\d{3}\)(\s\d{7}|\d{7})|\d{10})|(\(\d{3}\)(\s\d{7}|\d{7})|\d{10}))/;
    return template.test(phone);
}

function validateMail(mail) {
    let template = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return template.test(mail);
}

function ajaxSend(url, params, callback) {
    let xlr = new XMLHttpRequest();
    callbackFunc = callback || function() {};

    xlr.onreadystatechange = function() {
        if (xlr.readyState == 4 && xlr.status === 200) {
            callbackFunc(xlr.responseText);
        }
    }
    xlr.open('POST', url);
    xlr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //чтоб кириллица отправилась при пост запросе всегда писать эту строку
    xlr.send(params);
}