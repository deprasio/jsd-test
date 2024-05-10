import { DataTable } from "@/components/data-table";
import { Fish, columns } from "./columns";

async function getFish(): Promise<Fish[]> {
  const res = await fetch(
    "https://test.api.sahabatlautlestari.com/species/all",
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getFish();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Fish</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
