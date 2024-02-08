import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="px-10 py-20 bg-zinc-900 text-white">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-between items-center w-full">
          <Link href={`/`} className="text-2xl font-dmSerifText">
            booktome.
          </Link>
          <div>
            <Link
              href={`https://github.com/Sumansourabh14/booktome`}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="hover:text-green-600"
              />
            </Link>
          </div>
        </div>
        <hr />
        <p className="text-sm font-light">
          Copyright &copy; {year} | Built by{" "}
          <Link
            href={`https://sumansourabh.netlify.app`}
            target="_blank"
            className="underline hover:underline-offset-4"
          >
            Suman Sourabh
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
