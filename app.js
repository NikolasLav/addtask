let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");
let task_name = document.getElementById("task_name");

btn.addEventListener("click", function(){
    tg.MainButton.setText("Задача создана!");
    tg.MainButton.show();

    tg.sendData(task_name);
});
