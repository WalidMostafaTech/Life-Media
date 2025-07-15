import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPageDetails } from "../../store/pages/pagesAction";
import { Helmet } from "react-helmet";
import LoadingPage from "../../components/layout/Loading/LoadingPage";

const NewPages = () => {
  const { slug } = useParams();
  const { page, loading } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageDetails(slug));
  }, [dispatch, slug]);

  const metaTitle = page?.page_title;
  const metaDescription = page?.page_meta_description;
  const metaImage = page?.page_meta_preview_image;

  if (loading) return <LoadingPage />;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="container sectionPadding mt-[70px] min-h-[60vh]">
        <h1 className="text-4xl font-bold text-center max-w-2xl mb-4 lg:mb-8 mx-auto">
          {page?.page_title}
        </h1>

        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: page?.content }}
        ></div>
      </article>
    </>
  );
};

export default NewPages;
