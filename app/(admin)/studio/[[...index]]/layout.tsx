import { ReactNode } from "react";
import "../../../../styles/globals.css";
const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;
