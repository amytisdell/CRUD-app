class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }
}


class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

class HouseService {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses() { 
        return $.get(this.url);
    }

    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house) {
        return $.post(this.url, house); 
    }

    static updateHouse(house) {
        return $.ajax({
            url: this.url + `/${house._id}`;
            dataType: 'json', 
            data: JSON.stringify(house),
            contentType: 'applcation/json',
            type: 'PUT'
        });
    }
}
//15.24 mark 