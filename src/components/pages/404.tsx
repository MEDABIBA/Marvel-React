import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";
const Page404 = (): JSX.Element => {
	return (
		<div>
			<ErrorMessage />
			<p className="page-not-found">Page doesn't exist</p>
			<Link
				className="back-link"
				to="/">
				Back to main page
			</Link>
		</div>
	);
};
export default Page404;
