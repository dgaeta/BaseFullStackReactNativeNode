/**
 * A function to check if the passed value is undefined or null or empty
 * object or string‘s length is 0.
 */
export default function isEmpty(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
