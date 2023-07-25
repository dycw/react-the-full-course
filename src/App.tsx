import { useGetProductsQuery } from "./api/api";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addMany, addOne, reset } from "./slices/counter";

export default function App() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const { isLoading, isSuccess, data, isError, error } =
    useGetProductsQuery(null);

  const content = isLoading ? (
    <div>Loading... (2 second wait)</div>
  ) : isSuccess && data ? (
    <ul>
      {data.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  ) : isError && error ? (
    <div>{error.toString()}</div>
  ) : null;

  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl">React Template</h1>
        <div>
          <h2 className="text-2xl">State</h2>
          <div className="flex gap-4">
            <div>Count: {count}</div>
            <button
              className="bg-gray-500 text-white"
              onClick={() => dispatch(addOne())}
            >
              Add 1
            </button>
            <button
              className="bg-gray-500 text-white"
              onClick={() => dispatch(addMany(2))}
            >
              Add 2
            </button>
            <button
              className="bg-gray-500 text-white"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">API</h2>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
