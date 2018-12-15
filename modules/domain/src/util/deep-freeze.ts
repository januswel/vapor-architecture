// https://github.com/substack/deep-freeze
export default function deepFreeze(target: Object) {
  Object.freeze(target)
  for (const key in target) {
    if (
      target.hasOwnProperty(key) &&
      target[key] !== null &&
      (typeof target[key] === 'object' || typeof target[key] === 'function') &&
      !Object.isFrozen(target[key])
    ) {
      deepFreeze(target[key])
    }
  }

  return target
}
