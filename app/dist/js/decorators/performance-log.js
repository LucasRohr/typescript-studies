export function performanceLog(isSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = function (...args) {
            const temp1 = performance.now();
            const originalReturn = originalFunction.apply(this, args);
            const temp2 = performance.now();
            const divider = isSeconds ? 1000 : 1;
            const timeLabel = isSeconds ? 'seconds' : 'ms';
            const message = `${propertyKey} | execution time: ${(temp1 - temp2) / divider} ${timeLabel}`;
            console.log(message);
            return originalReturn;
        };
        return descriptor;
    };
}
