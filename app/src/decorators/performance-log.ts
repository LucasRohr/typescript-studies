export function performanceLog() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value // store function reference

    descriptor.value = (...args: any[]) => {
      const temp1 = performance.now()

      const originalReturn = originalFunction.apply(this, args) // calls original function and stores return

      const temp2 = performance.now()
      const message = `${propertyKey} | execution time: ${(temp1 - temp2) / 1000} seconds`
      console.log(message)

      originalReturn // returns original function return
    }

    return descriptor
  }
}
