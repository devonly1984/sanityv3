"use client";
import { usePreview } from "../lib/sanity-preview";
import BlogList from "./BlogList";

type Props = {
	query: string;
};
const PreviewBlogList = ({ query }: Props) => {
	const posts = usePreview(null, query);

	return (
		<div>
			<BlogList posts={posts} />
		</div>
	);
};

export default PreviewBlogList;
