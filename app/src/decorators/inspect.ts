export function inspect() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value

    descriptor.value = function (...args: any[]) {
      console.log(`=== Function: ${propertyKey} ===`)
      console.log(`-> Params: ${JSON.stringify(args)}`)

      const originalReturn = originalFunction.apply(this, args)

      console.log(`-> Return: ${JSON.stringify(originalReturn)}`)

      return originalReturn
    }

    return descriptor
  }
}
