import { Helmet } from "react-helmet";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
const ComicsPage = (): JSX.Element => {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Our comics</title>
				<meta name="description" content="Marvel comics page" />
			</Helmet>
			<AppBanner />
			<ComicsList />
		</>
	);
};
export default ComicsPage;
