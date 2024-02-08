import Link from "next/link";

const AlreadyAccountLink = ({ destination, linkText, text }) => {
  return (
    <p>
      {text}{" "}
      <Link href={destination} className="underline text-blue-400">
        {linkText}
      </Link>
    </p>
  );
};

export default AlreadyAccountLink;
