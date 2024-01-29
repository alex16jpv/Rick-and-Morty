export const makeGraphqlRequest = async (
  query: string,
  variables?: unknown
) => {
  const response = await fetch("http://localhost:4000/", {
    body: JSON.stringify({
      query,
      variables,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
