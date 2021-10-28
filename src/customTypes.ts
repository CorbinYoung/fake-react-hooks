export type InitState<S> = S extends (() => unknown) ? ReturnType<S> : S;

export type BasicStateAction<S> = S extends ((prevState: unknown) => unknown) ? ReturnType<S> : S;

export type Dispatch<A> = (action: A) => void;
