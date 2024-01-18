interface WPQUERY {
  query: string;
  variables?: object;
}

export const wpquery = async ({ query, variables = {} }: WPQUERY) => {
  try {
    const response = await fetch(
      "http://portfolioastrowordpress.local/graphql",
      {
        headers: { "Content-Type": "application/json" },
        method: "post",
        body: JSON.stringify({ query, variables }),
      }
    );
    if (!response.ok) {
      console.error(response);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
