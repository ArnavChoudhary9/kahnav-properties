import Card from "@/components/card";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between px-4 py-16 md:px-12 lg:px-24"
      style={{
        height: 'calc(100vh - 5rem)'
      }}
    >
      <div className="relative z-10 flex items-center justify-center w-full h-32 lg:h-72">
        <div className="absolute inset-0 z-[-10] rounded-full bg-gradient-radial from-blue-900 to-transparent blur-3xl"></div>
        <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl">
          Kahnv Properties
        </h1>
      </div>


      <div className="grid gap-6 w-full max-w-5xl grid-cols-1 sm:grid-cols-2">
        <Card
          title="Buy"
          description="Buy properties from all around Sikar, with the trust of our brokers."
          link="/buy"
        />
        <Card
          title="List"
          description="Get the best value for your properties. List them on Kahnv Properties to bypass middlemen and get maximum profits."
          link="/list"
        />
      </div>
    </main>
  );
}
