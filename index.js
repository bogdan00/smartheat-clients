const SmartHeat = {
    clients: {
        Salus: require('./clients/Salus'),
        SalusApi: require('./clients/SalusApi'),
        Mock: require('./clients/Mock')
    }
};

module.exports = SmartHeat;
