import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const User = () => {
  const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getUsers"], // Unique id for every api request
    queryFn: fetchData,
  });

  console.log(data);
  console.log({ isLoading });
  console.log({ isError });

  if (isError) return <div>ERROR</div>;
  if (isLoading) return <div>Loading..</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default User;
