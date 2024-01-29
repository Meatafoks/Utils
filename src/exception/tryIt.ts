import { ExceptionWrapper } from "./exceptionWrapper";

export function tryIt(block: () => void) {
    try {
        block();
        return new ExceptionWrapper( false );
    } catch (e) {
        return new ExceptionWrapper( e as any );
    }
}