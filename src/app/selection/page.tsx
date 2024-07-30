import SelectionPage from "@/Layout/SelectionPage";
async function getData() {
  const res = await fetch("https://dev.api.bono.so/v1/charity/causes?take=9");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Page() {
  const data = await getData();
  return <SelectionPage data={data} />;
}
