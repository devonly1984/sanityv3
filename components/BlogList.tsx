import Image from "next/image";
import { urlFor } from "../lib/urlFor";

type Props = {
	posts: Post[];
};
const BlogList = ({ posts }: Props) => {
	console.log(posts.length);
	return (
		<div>
			<hr className="border-[#F7ab0a] mb-10" />
			<div>
				{/**Posts */}
				{posts.map((post) => (
					<div key={post._id} className="group cursor-pointer flex flex-col">
						<div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
							<Image
								src={urlFor(post.mainImage).url()}
								className="object-cover lg:object-center"
								alt={post.author.name}
								fill
							/>
							<div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
								<div>
									<p className="font-bold">{post.title}</p>
									<p>
										{new Date(post._createdAt).toLocaleDateString("en-US", {
											day: "numeric",
											month: "long",
											year: "numeric",
										})}
									</p>
								</div>
								<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
									{post.categories.map((category) => (
										<div
											key={category._id}
											className="bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
										>
											<p>{category.title}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogList;
