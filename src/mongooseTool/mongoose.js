module.exports = {
    mongooseListToObj: (list) => {
        return list.map(item => item.toObject());
    },
    mongooseElementToObj: (element) => {
        return element ? element.toObject() : element;
    }
}