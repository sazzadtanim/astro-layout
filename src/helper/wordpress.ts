interface QueryI {
  query: string;
  variables?: object;
}

export const wpquery = async ({ query, variables }: QueryI) => {
  const res = await fetch("http://portfolioastrowordpress.local/graphql", {
    body: JSON.stringify({ query, variables }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!res.ok) {
    console.error(res);
    return {};
  }

  const { data } = await res.json();
  return data;
};
