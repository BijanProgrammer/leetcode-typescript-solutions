// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
    let timeout: any | null = null;
    let latestArgs: any[] | null = null;

    function setTimeoutCallback() {
        timeout = null;

        if (latestArgs !== null) {
            fn(...latestArgs);
            latestArgs = null;

            timeout = setTimeout(setTimeoutCallback, t);
        }
    }

    return function (...args) {
        if (timeout === null) {
            fn(...args);
            latestArgs = null;
        } else {
            latestArgs = args;
            return;
        }

        timeout = setTimeout(setTimeoutCallback, t);
    };
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
