export function sanitize() {
    return function (target, propertyKey, descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = function (...args) {
            const originalReturn = originalFunction.apply(this, args);
            if (typeof originalReturn === 'string') {
                return originalReturn.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return originalReturn;
        };
        return descriptor;
    };
}
