import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex items-center justify-between space-x-5 font-bold px-10 py-5">
			<div className="flex items-center space-x-2">
				<Link href="/">
					<Image
						className="rounded-full"
						src="https://links.papareact.com/1m8"
						width={50}
						height={50}
						alt="logo"
					/>
				</Link>
				<h1>PapaFam</h1>
			</div>
			<div className="">
				{" "}
				<Link
					href="https://www.papareact.com/universityofcode"
					className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
				>
					Sign up to the University of Code
				</Link>
			</div>
		</header>
	);
};

export default Header;
