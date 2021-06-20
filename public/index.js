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

class Room {
    constructor() {
        this.rooms = [];
        this.container = '#rooms';

        this._getReq();
    }
    drawChat(room) {
        let block = document.querySelector(this.container);
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
}

new Room();
