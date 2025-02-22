import {
  useCount,
  useDecrement,
  useIncrement,
  useReset,
} from "./stores/counter/counterSelectors";

const App = () => {
  const count = useCount();
  const increment = useIncrement();
  const decrement = useDecrement();
  const reset = useReset();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">{count}</h1>
        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrease
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
