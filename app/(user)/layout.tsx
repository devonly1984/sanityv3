import { ReactNode } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";
const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<head />

			<body className="max-w-7xl mx-auto">
				<Header />
				<Banner />
				{children}
			</body>
		</html>
	);
};
export default RootLayout;
