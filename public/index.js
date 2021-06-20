class Room {
    constructor() {
        this.title;
        this.rooms = [];
        this.container = '#rooms';

        this._init();
    }

    _init() {
        this.getReq()
        setTimeout(() => {
            this.getRooms(this.rooms[0]);
            console.log(this.rooms[0])
        }, 100);
    }

    drawChat(room) {
        let block = document.createElement('div');
        block.innerHTML = `<div class="room">${room}</div>`
        document.querySelector(this.container).append(block);
    }

    getReq() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '/rooms');
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                console.error('err');
            } else {
                console.log('esss');
                this.rooms.push(JSON.parse(xhr.response));
                console.log(this.rooms)
            }
        }
        return this.rooms;
    }

    getRooms(arr) {
        arr.forEach(el => {
            console.log(el)
            this.drawChat(el.Title);
        });
    }

}

new Room();
