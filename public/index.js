function ajax(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                reject('Error');
            } else {
                resolve(xhr.response);
            }
        }
    })
}

function clearMain() {
    const main = document.getElementById('content');
    while (main.firstChild) { main.removeChild(main.firstChild) };
}

class Rooms {
    constructor() {
        this.rooms = [];
        this.container = 'rooms';

        this._renderPage();
        this._getReq();
    }
    drawChat(room) {
        let block = document.getElementById(this.container);
        block.insertAdjacentHTML('beforeend', `<div class="room">${room}</div>`);
    }
    _getReq() {
        return ajax('GET', '/rooms').then(result => this.getRooms(JSON.parse(result)));
    }
    getRooms(arr) {
        arr.forEach(el => {
            this.drawChat(el.Title);
        });
    }
    _renderPage() {
        clearMain();
        document.getElementById('content').insertAdjacentHTML('beforeend', 
            `<div id="${this.container}" class="rooms">
                Мои переписки
            </div>`
        )
    }
}

new Rooms();

class NewUser {
    constructor() {
        this.container = 'registration';

        this._renderForm();
    }
    _renderForm() {
        clearMain();
        document.getElementById('content').insertAdjacentHTML('beforeend', 
            `<form id="${this.container}" action="/registrate">
                <label for="login">
                    Логин
                    <input name="registrate" type="text" id="login" reqiured/>
                </label>
                <label for="fullName">
                    Имя
                    <input name="registrate" type="text" id="fullName" reqiured/>
                </label>
                <label for="password">
                    Пароль
                    <input name="registrate" type="password" id="password" reqiured/>
                </label>
                <label for="password-repeat">
                    Повторите пароль
                    <input name="registrate" type="password" id="password-repeat" reqiured/>
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>`
        )
    }
    // sendForm() {
    //     return ajax('POST', '/newuser').then(console.log(result));
    // }
}

class ActiveUser {
    constructor() {
        this.login;
        this.password;

    }
}

// new NewUser();

class Message {
    constructor() {
        this.container = 'chat';
        this.sender;

        this._renderChat();
    }
    sendMessage() {
        return ajax('POST', '/chat')
    }
    takeMessage() {
        return ajax('GET', '/chat')
    }
    drawMessage() {
        document.getElementById(`${this.container}`).insertAdjacentHTML('beforeend', 
            `<div>$</div>`
        )
    }
    _renderChat() {
        clearMain();
        document.getElementById('content').insertAdjacentHTML('beforeend', 
            `<div id=""${this.container}>
                s
            </div>`
        )
    }
}