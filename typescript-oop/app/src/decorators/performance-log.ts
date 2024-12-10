export function performanceLog(isSeconds: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value // store function reference

    descriptor.value = function (...args: any[]) {
      const temp1 = performance.now()

      const originalReturn = originalFunction.apply(this, args) // calls original function and stores return

      const temp2 = performance.now()

      const divider = isSeconds ? 1000 : 1
      const timeLabel = isSeconds ? 'seconds' : 'ms'
      const message = `${propertyKey} | execution time: ${(temp1 - temp2) / divider} ${timeLabel}`
      console.log(message)

      return originalReturn // returns original function return
    }

    return descriptor
  }
}
