// 2.
/**
 * toISOString 메서드는 항상 UTC로 시간을 표시한다.
 * UTC를 신경쓰지 않고 표현하려면, format을 사용하여 현재 날짜를 리턴하도록 한다.
 *
 * 추가적인 사항  
 * moment 객체는 mutable variable이다. mutable variable은 버그의 근원이다.
 * mutable이기에 moment객체가 바뀔 수 있고, moment('2019-05-07')가 undefined를 반환하면 delete되어 버린다.
 * Object.freeze를 사용하여 immutable하게 하여 버그를 방지하도록 한다.
 * 
 */


const moment = require('moment');

const convertParam = (params) => {
    for (const key in params) {
        if (params[key] == undefined) {
            delete params[key];
        }
        if (params[key] instanceof moment) {
            params[key] = params[key].format();
        }
    }
};

const p = { a: 'test', b: Object.freeze(moment('2019-05-07')), c: undefined };
convertParam(p);