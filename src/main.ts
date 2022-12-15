function sort_by_type(arr: any[]): any {
    const result = {};
  
    for (const elem of arr) {
      const type = typeof elem;
      if (!result[type]) {
        result[type] = [];
      }
  
      result[type].push(elem);
    }
  
    return result;
  }
  
  function sortByType(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
    const originalMethod = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      const result = originalMethod.apply(this, args);
      const by_type = sort_by_type(args);
  
      return {
        ...result,
        by_type
      };
    };
  
    return descriptor;
  }

@sortByType
function x(arg1: string, arg2: number, arg3: number, arg4: string, arg5: any[]): any {
  return {
    someValue: 'foo'
  };
}