export function sanitize() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value

    descriptor.value = function (...args: any[]) {
      const originalReturn = originalFunction.apply(this, args)

      if (typeof originalReturn === 'string') {
        return originalReturn.replace(/<script>[\s\S]*?<\/script>/, '')
      }

      return originalReturn
    }

    return descriptor
  }
}
