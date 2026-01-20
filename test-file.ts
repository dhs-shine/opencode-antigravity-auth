// Test file for demonstrating OpenCode tools

export async function exampleFunction(param: string): Promise<any> {
  console.log("Example function called with:", param);
  console.log("Processing data...");
  
  const result = await fetchData(param);
  return result;
}

export function fetchData(query: string): Promise<any> {
  return fetch(`https://api.example.com/${query}`)
    .then(res => res.json());
}

export const CONFIG = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
};
