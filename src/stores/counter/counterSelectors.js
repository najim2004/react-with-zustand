import useCounterStore from "./counterStore";

export const useCount = () => useCounterStore((state) => state.count);
export const useIncrement = () => useCounterStore((state) => state.increment);
export const useDecrement = () => useCounterStore((state) => state.decrement);
export const useReset = () => useCounterStore((state) => state.reset);
