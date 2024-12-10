export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`=== Function: ${propertyKey} ===`);
            console.log(`-> Params: ${JSON.stringify(args)}`);
            const originalReturn = originalFunction.apply(this, args);
            console.log(`-> Return: ${JSON.stringify(originalReturn)}`);
            return originalReturn;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map