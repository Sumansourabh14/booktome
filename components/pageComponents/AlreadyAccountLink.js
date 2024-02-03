import Link from "next/link";

const AlreadyAccountLink = ({ destination, linkText }) => {
  return (
    <p>
      Already have an account?{" "}
      <Link href={destination} className="underline text-blue-400">
        {linkText}
      </Link>
    </p>
  );
};

export default AlreadyAccountLink;
