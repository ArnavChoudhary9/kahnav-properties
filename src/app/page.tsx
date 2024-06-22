export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-16 md:px-12 lg:px-24">
      <div className="relative z-10 flex items-center justify-center w-full h-32 lg:h-72">
        <div className="absolute inset-0 z-[-10] rounded-full bg-gradient-radial from-blue-900 to-transparent blur-3xl"></div>
        <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl">
          Kahnav Properties
        </h1>
      </div>

      <div className="grid gap-6 w-full max-w-5xl grid-cols-1 sm:grid-cols-2">
        <a
          href="/buy"
          className="group m-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            Buy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-sm opacity-50">
            Buy properties from all around Sikar, with the trust of our brokers.
          </p>
        </a>

        <a
          href="/list"
          className="group m-4 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 block"
        >
          <h2 className="mb-2 text-2xl font-semibold">
            List{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-sm opacity-50">
            Get the best value for your properties. List them on Kahnav Properties to bypass middlemen and get maximum profits.
          </p>
        </a>
      </div>
    </main>
  );
}
