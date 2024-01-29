import { Wrapper } from "./wrapper";

export class NotNullWrapper<T> {
    public constructor(private source: NonNullable<T>) {}

    public get value(): NonNullable<T> {
        return this.source;
    }

    public andGetValue(): NonNullable<T> {
        return this.value;
    }

    public orElseMap<R>(mapper: (it: NonNullable<T>) => R) {
        return new Wrapper<R>( mapper( this.source! ) );
    }

    public orElseRun(mapper: (it: NonNullable<T>) => void): NotNullWrapper<T> {
        mapper( this.source );
        return this;
    }

    public run<R>(callback: (it: NonNullable<T>) => R): Wrapper<R> {
        return new Wrapper<R>( callback( this.source ) );
    }
}