import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const ApiRequests = () => {
  const postData = () => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Mutations",
    });
  };

  const mutation = useMutation({
    mutationFn: postData,
    mutationKey: ["mutationPost"],
    onSuccess: (data) => {
      console.log("Post Created Successfully", data);
    },
  });

  return (
    <>
      <h3>Mutation</h3>
      <button onClick={() => mutation.mutate()}>Trigger Mutation</button>
    </>
  );
};

export default ApiRequests;
