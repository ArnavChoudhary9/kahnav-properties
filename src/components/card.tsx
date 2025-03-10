import Link from "next/link";

const Card = (
  { title, link, description }: {
    title: string;
    link: string;
    description: string;
  }
) => {
  return (
    <Link
      href={link}
      className="group m-4 rounded-lg border px-5 py-4 transition-all duration-300 hover:scale-105 border-neutral-800/40 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-800/30 block"
    >
      <h2 className="mb-2 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="text-sm opacity-50">
        {description}
      </p>
    </Link>
  );
}

export default Card;
