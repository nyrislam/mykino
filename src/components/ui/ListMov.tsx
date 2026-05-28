import Loading from "./Loading";

export default function ListMov({ data, error, isLoading }) {
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.data.message}</p>;
  }
  return (
    <ul className="grid grid-cols-4 w-full gap-4">
      {data.items.map((date, index) => (
        <li key={index}>
          <img
            src={date.posterUrl}
            alt={index}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </li>
      ))}
    </ul>
  );
}
