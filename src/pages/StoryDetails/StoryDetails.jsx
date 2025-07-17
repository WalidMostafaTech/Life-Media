import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSuccessStoryDetails } from "../../store/success_stories/success_storiesAction";
import { getNewLiveMediaDetails } from "../../store/newLiveMedia/newLiveMediaAction";
import LoadingSection from "../../components/layout/Loading/LoadingSection";
import { Helmet } from "react-helmet";

const StoryDetails = () => {
  const { type, id } = useParams();

  const { newLiveMediaDetails, loading: newLiveMediaLoading } = useSelector(
    (state) => state.newLiveMedia
  );

  const { successStoriesDetails, loading: successStoriesLoading } = useSelector(
    (state) => state.successStories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "success_story") {
      dispatch(getSuccessStoryDetails(id));
    } else {
      dispatch(getNewLiveMediaDetails(id));
    }
  }, [dispatch, type, id]);

  const data =
    type === "success_story" ? successStoriesDetails : newLiveMediaDetails;

  if (newLiveMediaLoading || successStoriesLoading) {
    return <LoadingSection />;
  }

  return (
    <>
      <Helmet>
        <title>
          {data?.title ? `${data.title} | Life Media` : "Life Media"}
        </title>
        <meta
          name="description"
          content={data?.paragraph?.slice(0, 160) || ""}
        />
        <meta property="og:title" content={data?.title || ""} />
        <meta
          property="og:description"
          content={data?.paragraph?.slice(0, 160) || ""}
        />
        <meta property="og:image" content={data?.image_url || "/logo.png"} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <article className="container sectionPadding mt-[70px] space-y-4">
        <div className="w-full lg:h-[60vh] overflow-hidden">
          <img
            src={data?.image_url}
            alt={data?.title}
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold text-center max-w-2xl mx-auto">
          {data?.title}
        </h1>

        <div
          className="htmlContent"
          dangerouslySetInnerHTML={{
            __html: data?.paragraph,
          }}
        />
      </article>
    </>
  );
};

export default StoryDetails;
