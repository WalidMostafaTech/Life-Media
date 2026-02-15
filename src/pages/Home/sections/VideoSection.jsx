import { useQuery } from "@tanstack/react-query";
import { getVideoSection } from "../../../api/homeServices";
import SkeletonVideoSection from "../../../components/Loading/SkeletonLoading/SkeletonVideoSection";

const VideoSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["videoSection"],
    queryFn: getVideoSection,
  });

  if (isLoading) return <SkeletonVideoSection />;

  if (!data?.length || !data) return null;

  return (
    <article className="relative w-full h-[90vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={data[0].full_path}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 bg-dark-red/20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{data[0].title}</h1>
        <p className="text-lg md:text-2xl max-w-2xl">{data[0].paragraph}</p>
      </div>
    </article>
  );
};

export default VideoSection;
