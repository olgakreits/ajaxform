<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="form">
        <label>Ваше имя:</label><br/>
        <input type="text" id="name" value="" />
        <br/>
        <br/>
        <label>Ваш e-mail:</label><br/>
        <input type="text" id="email" value="" />
        <br/>
        <br/>
        <label>Телефон:</label>
        <input id="phone" />
        <br/>
        <br/>
        <label>Текст сообщения:</label>
        <textarea id="text_comment"></textarea>
        <br/>
        <br/>
        <input type="button" value="Отправить" id="btn_submit" />
        <div id="erconts"></div>

    </div>
    <div class="message"></div>
    <script src="js/script.js"></script>
</body>

</html>