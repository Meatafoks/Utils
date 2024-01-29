export function orElseThrow<T>(value: T | undefined | null, error = 'undefined value'): T {
    if (value !== undefined && value !== null) return value;
    throw new Error( error );
}