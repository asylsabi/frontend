// atm.js
let balance = 1000;
let pinCode = "1234";
let transactionHistory = [];

function checkPin(inputPin) {
    return inputPin === pinCode;
}

function enterPin() {
    const pinInput = document.getElementById("pin").value;
    if (checkPin(pinInput)) {
        showMenu();
    } else {
        alert("Неверный PIN-код");
    }
}

document.getElementById("pin").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        enterPin();
    }
});

function showMenu() {
    const menu = `
        <div class="atm-menu">
            <button onclick="checkBalance()">Проверить баланс</button>
            <button onclick="deposit()">Внести наличные</button>
            <button onclick="withdraw()">Снять наличные</button>
            <button onclick="transfer()">Перевести средства</button>
            <button onclick="viewTransactionHistory()">История операций</button>
            <button onclick="changePin()">Изменить PIN-код</button>
            <button onclick="exit()">Завершить работу</button>
        </div>
    `;
    document.querySelector(".atm-interface").innerHTML = menu;
}

function checkBalance() {
    alert("Ваш текущий баланс: " + balance);
}

function deposit() {
    const amount = parseFloat(prompt("Введите сумму для внесения:"));
    if (!isNaN(amount)) {
        balance += amount;
        transactionHistory.push("Внесение наличных: +" + amount);
        alert("Внесено: " + amount);
    } else {
        alert("Некорректная сумма");
    }
}

function withdraw() {
    const amount = parseFloat(prompt("Введите сумму для снятия:"));
    if (!isNaN(amount)) {
        if (balance >= amount) {
            balance -= amount;
            transactionHistory.push("Снятие наличных: -" + amount);
            alert("Снято: " + amount);
        } else {
            alert("Недостаточно средств на счете");
        }
    } else {
        alert("Некорректная сумма");
    }
}

function transfer() {
    const amount = parseFloat(prompt("Введите сумму для перевода:"));
    if (!isNaN(amount)) {
        if (balance >= amount) {
            balance -= amount;
            transactionHistory.push("Перевод средств: -" + amount);
            alert("Переведено: " + amount);
        } else {
            alert("Недостаточно средств на счете");
        }
    } else {
        alert("Некорректная сумма");
    }
}

function viewTransactionHistory() {
    alert("История операций:\n" + transactionHistory.join("\n"));
}

function changePin() {
    const newPin = prompt("Введите новый PIN-код:");
    if (newPin !== null && newPin !== "") {
        pinCode = newPin;
        alert("PIN-код успешно изменен");
    } else {
        alert("Некорректный PIN-код");
    }
}

function exit() {
    alert("Работа завершена");
    window.location.reload();
}
