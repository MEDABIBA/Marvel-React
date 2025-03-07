import { Helmet } from "react-helmet";
import AppBanner from "../appBanner/AppBanner";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataChar, { IDataComics } from "../types/marvel";
import { ISinglePageProps } from "../types/marvel";
import { store } from "../../stores/RootStore";
import { observer } from "mobx-react-lite";
const SinglePage = observer(<T extends DataChar | IDataComics>({ Component, dataType }: ISinglePageProps<T>) => {
  const { ID } = useParams<string>();
  const marvelStore = store.marvelStore;
  const singlePage = store.singlePage;
  useEffect(() => {
    singlePage.updating(dataType, ID);
    // eslint-disable-next-line
  }, [ID]);
  const spinner = marvelStore.loading ? <Spinner /> : null;
  const errorMessage = marvelStore.error ? <ErrorMessage /> : null;
  const content = !marvelStore.loading && !marvelStore.error && singlePage.data && ID ? <Component data={singlePage.data as T} /> : null;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Marvel description portal" />
        <title>description</title>
      </Helmet>
      <AppBanner />
      {spinner}
      {errorMessage}
      {content}
    </>
  );
});
export default SinglePage;
