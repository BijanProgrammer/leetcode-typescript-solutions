// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
    let timeout: any = undefined;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
