export function timeout(n: number) {
    return new Promise( resolve => setTimeout( resolve, n ) );
}