export class ExceptionWrapper {
    public constructor(private exception: any | false) {}

    onException(callback: (error: any) => void) {
        if (this.exception !== false) {
            callback( this.exception );
        }
        return this;
    }

    onSuccess(callback: () => void) {
        if (this.exception === false) {
            callback();
        }
        return this;
    }

    mapSuccess<K>(mapper: () => K): K | ExceptionWrapper {
        if (this.exception === false) return mapper();
        return this;
    }

    mapException<K>(mapper: (exception: any) => K): K | ExceptionWrapper {
        if (this.exception !== false) return mapper( this.exception );
        return this;
    }
}