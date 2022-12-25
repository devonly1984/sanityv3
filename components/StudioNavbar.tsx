import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
	return (
		<div className="">
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#f7ab0a] flex items-center">
					<ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
					Go to the website
				</Link>
				<div className="hidden md:flex p-5 rounded-lg jusify-center border-2 border-[#f7ab0a]">
					<h1 className="font-bold text-white">
						Want Coding & Solutions sent to your inbox daily?
					</h1>
					<Link
						href="https://www.papareact.com/universityofcode"
						className="font-bold ml-2 text-[#f7ab0a]"
					>
						https://www.papareact.com/universityofcode
					</Link>
				</div>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default StudioNavbar;
