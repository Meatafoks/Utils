import { Wrapper } from './wrapper';

export function use<T>(value: T) {
    return new Wrapper(value);
}
