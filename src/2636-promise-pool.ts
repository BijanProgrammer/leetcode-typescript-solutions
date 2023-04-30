type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
    return new Promise<void>((resolve) => {
        if (functions.length === 0) {
            resolve();
            return;
        }

        let i = 0;
        let resolvedCount = 0;

        const callAnotherFunction = () => {
            resolvedCount++;
            if (resolvedCount >= functions.length) {
                resolve();
                return;
            }

            if (i < functions.length) {
                functions[i]().then(() => callAnotherFunction());
                i++;
            }
        };

        while (i < n && i < functions.length) {
            functions[i]().then(() => callAnotherFunction());
            i++;
        }
    });
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

const main = async () => {
    const sleep = (t: number) => new Promise((res) => setTimeout(res, t));

    console.time('time');
    await promisePool([() => sleep(500), () => sleep(400)], 1); // After 900ms
    console.timeEnd('time');
};

main().then(() => console.log('done'));
