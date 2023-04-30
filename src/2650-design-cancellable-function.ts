function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {
    let canceled = false;
    const fn = () => {
        canceled = true;
    };

    const promise = new Promise<T>(async (resolve, reject) => {
        try {
            let state = generator.next();

            while (!state.done) {
                let feed: any = null;
                let error: any = null;

                try {
                    feed = await state.value;
                } catch (e) {
                    error = e;
                }

                if (canceled) {
                    try {
                        state = generator.throw('Cancelled');
                        return resolve(state.value);
                    } catch (e) {
                        return reject(e);
                    }
                }

                if (error === null) state = generator.next(feed);
                else state = generator.throw(error);
            }

            resolve(state.value);
        } catch (e) {
            reject(e);
        }
    });

    return [fn, promise];
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */

// console.log('TEST 01');
// {
//     function* tasks(): Generator<Promise<any>, any, any> {
//         const val = yield new Promise<any>((resolve) => resolve(2 + 2));
//         console.log(val);
//         yield new Promise<any>((resolve) => setTimeout(resolve, 100));
//         return val + 1;
//     }
//
//     const [cancel, promise] = cancellable(tasks());
//     setTimeout(cancel, 50);
//     promise.then(console.log).catch(console.log); // logs "Cancelled" at t=50ms
// }
// console.log();

// console.log('TEST 02');
// {
//     function* chiz2(): Generator<Promise<any>, any, any> {
//         const msg = yield new Promise((res) => res('Hello'));
//         throw `Error: ${msg}`;
//     }
//
//     const [cancel, promise] = cancellable(chiz2());
//
//     setTimeout(cancel, 1000);
//     promise.then(console.log).catch(console.log);
// }
// console.log();

console.log('TEST 03');
{
    function* chiz3(): Generator<Promise<any>, any, any> {
        try {
            yield new Promise((resolve, reject) => reject('Promise Rejected'));
        } catch (e) {
            const a = yield new Promise((resolve) => resolve(2));
            const b = yield new Promise((resolve) => resolve(2));
            return a + b;
        }
    }

    const [cancel, promise] = cancellable(chiz3());

    setTimeout(cancel, 1000);
    promise.then(console.log).catch(console.log);
}
console.log();
