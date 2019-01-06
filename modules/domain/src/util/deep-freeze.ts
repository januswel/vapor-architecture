// https://github.com/substack/deep-freeze

const deepFreeze = <T>(target: Object) => {
  Object.freeze(target)
  for (const key in target) {
    if (
      target.hasOwnProperty(key) &&
      target[key] !== null &&
      (typeof target[key] === 'object' || typeof target[key] === 'function') &&
      !Object.isFrozen(target[key])
    ) {
      deepFreeze<T>(target[key])
    }
  }

  return target as T
}

export default deepFreeze
