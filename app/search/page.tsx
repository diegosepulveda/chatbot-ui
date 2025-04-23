
import { PropertyList } from "@/components/property-list";
import { properties } from "@/lib/data";

export default function Results({ searchParams }: { searchParams: Record<string, string> }) {
  //  ➤ You now have access to searchParams.budget, size, type, city…
  //    Replace this with your real list view.
  return (
    <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Discover Exceptional Properties
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              {/* Browse our curated collection of luxury properties, each offering unique features and exceptional value. */}
            </p>
          </div>
          
          <h1 className="text-2xl font-semibold mb-4">Resultados de búsqueda</h1>
          <pre className="bg-muted p-4 rounded">{JSON.stringify(searchParams, null, 2)}</pre>
          
          {/* <div className="mt-10">
            <PropertyList properties={properties} />
          </div> */}
        </div>
      </div>
  );
}
