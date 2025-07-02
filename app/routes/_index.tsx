import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { ManhwaListResponse } from "~/types/manhwa";
import { getAllManhwas } from "~/services/manhwaService";
import ManhwaGrid from "~/components/ManhwaGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "ManhwaReader - Home" },
    {
      name: "description",
      content: "Welcome to ManhwaReader, your source for the best manhwas!",
    },
  ];
};

export const loader: LoaderFunction = async () => {
  try {
    const manhwas = await getAllManhwas();
    return json(manhwas);
  } catch (error) {
    console.error("Error loading manhwas:", error);
    return json({
      manhwas: [],
      totalCount: 0,
      page: 1,
      pageSize: 10,
    });
  }
};

export default function Index() {
  const { manhwas } = useLoaderData<ManhwaListResponse>();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            ManhwaReader
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the best manhwas
          </p>
        </header>

        {manhwas.length > 0 ? (
          <ManhwaGrid
            manhwas={manhwas}
            onManhwaClick={(manhwa) => {
              // TODO: Implementar navegación al detalle del manhwa
              console.log("Clicked manhwa:", manhwa);
            }}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No manhwas found. Check back later!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
