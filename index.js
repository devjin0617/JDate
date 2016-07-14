function init(date) {

    if(!date) {
        return this.date = new Date();
    }

    if(Object.prototype.toString.call(date) === '[object Date]') {
        return this.date = date;
    }

    if(typeof date === 'string') {
        this.date = new Date(date);
        return this.dateString = date;
    }

}

function toDateString(date, format) {

    if(!date) {
        if(!this.date) {
            console.log('error');
            return;
        }
        date = this.date;
    }

    if(!format) {
        format = 'yyyy.mm.ddT00:00:00+0900';
    }

    return this.dateString = date.toString();

}

function toDate(dateString, format) {

    if(!dateString) {
        if(!this.dateString) {
            console.log('error');
            return;
        }
        dateString = this.dateString;
    }

    if(!format) {
        format = 'yyyy.mm.ddT00:00:00+0900';
    }

    return this.date = new Date(dateString);
}

function calc(type, value) {

    if(!this.date) {
        console.log('error');
        return;
    }

    var opt = {
        year : this.date.getFullYear(),
        month : this.date.getMonth(),
        day : this.date.getDate(),
        hour : this.date.getHours(),
        minute : this.date.getMinutes(),
        second : this.date.getSeconds()
    };

    switch(type) {
        case 'year' :
            opt.year = this.date.getFullYear() + (value);
            break;
        case 'month' :
            opt.month = this.date.getMonth() + (value);
            break;
        case 'day' :
            opt.day = this.date.getDate() + (value);
            break;
        case 'hour' :
            opt.hour = this.date.getHours() + (value);
            break;
        case 'minute' :
            opt.minute = this.date.getMinutes() + (value);
            break;
        case 'second' :
            opt.second = this.date.getSeconds() + (value);
            break;
        default :
            console.log('error');
            return;
    }

    this.date = new Date(opt.year, opt.month, opt.day, opt.hour, opt.minute, opt.second);
}


module.exports = {
    init : init,
    toDateString : toDateString,
    toDate : toDate,
    calc : calc
};