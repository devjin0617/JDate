
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
exports.init = init;

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
exports.toDateString = toDateString;

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
exports.toDate = toDate;