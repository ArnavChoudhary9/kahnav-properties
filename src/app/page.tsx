export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-12 sm:px-6 md:px-8 lg:px-16">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[200px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[120px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:text-6xl">
          Kahnav Properties
        </h1>
      </div>

      <div className="container mx-auto mb-16 grid gap-4 text-center sm:mb-24 md:mb-32 lg:grid-cols-2 lg:text-left">
        <a
          href="/buy"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Buy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            Buy properties from all around Sikar, with the trust of our brokers.
          </p>
        </a>

        <a
          href="/list"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            List{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            Get the best value for your properties. List them on Kahnav Properties to bypass middlemen and get maximum profits.
          </p>
        </a>
      </div>
    </main>
  );
}
