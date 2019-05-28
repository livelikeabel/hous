// 2.
const Moment = require('moment');

const convertParam = (params) => {
    for (const key in params) {
        if (params[key] == undefined) {
            delete params[key];
        }
        if (params[key] instanceof moment) {
            params[key] = params[key].toISOString();
        }
    }
};

const p = { a: 'test', b: moment('2019-05-07'), c: undefined };
convertParam(p);
