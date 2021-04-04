interface Storage {
    data: any[];
    hasUnmount: number[];
}
export declare const storage: Storage;
export declare const incrementCalls: () => number;
export declare const resetCalls: () => void;
export declare const clearData: () => void;
export {};
