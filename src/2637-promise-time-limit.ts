type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);

            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeout));
        });
    };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

const main = async () => {
    console.time('time');
    const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
    limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
    console.timeEnd('time');
};

main().then(() => console.log('done'));
