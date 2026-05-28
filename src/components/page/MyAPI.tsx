import { useHelloQuery } from "../../services/myapi";

export default function MyAPI() {
  const { data, isLoading, isError } = useHelloQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка подключения к бэкенду!</div>;
  console.log(data);
  return <div>MyAPI: {data.messege}</div>;
}
