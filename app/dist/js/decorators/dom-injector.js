export function domInjector(selector) {
    return function (target, propertyKey) {
        let element = null;
        const getter = function () {
            if (!element) {
                console.log(`getting ${selector}`);
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
