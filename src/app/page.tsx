import Inputs from "./components/Inputs";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center py-12">
      <h1 className="py-12 text-4xl font-bold">Adress Validator</h1>
      <Inputs />
    </main>
  );
}
