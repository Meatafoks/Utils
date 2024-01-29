import { NotNullWrapper } from './notNullWrapper';

/**
 * Обертка объекта
 */
export class Wrapper<T> {
    public constructor(protected source: T) {}

    isNull() {
        return this.source === undefined || this.source === null;
    }

    isNotNull() {
        return !this.isNull();
    }

    public get value() {
        return this.source;
    }

    public getValue() {
        return this.source;
    }

    public async async() {
        return this.source;
    }

    public throwIfNull(error = 'undefined object'): NotNullWrapper<T> {
        if (this.isNull()) throw new Error(error);
        return new NotNullWrapper(this.value!);
    }

    public mapIfNull(mapper: (it: T) => NonNullable<T>): NotNullWrapper<T> {
        if (this.isNull()) return new NotNullWrapper(mapper(this.value));
        return new NotNullWrapper(this.value!);
    }

    public also(mapper: (it: T) => void): Wrapper<T> {
        mapper(this.source);
        return this;
    }

    public run<R>(callback: (it: T) => R): void {
        callback(this.source);
    }

    public runIfNotNull<R>(callback: (it: NonNullable<T>) => R): void {
        if (this.isNotNull()) callback(this.source!);
    }

    public let<R>(callback: (it: T) => R): Wrapper<R> {
        return new Wrapper<R>(callback(this.source));
    }

    public map<R>(callback: (it: T) => R): Wrapper<R> {
        return new Wrapper<R>(callback(this.source));
    }
}
