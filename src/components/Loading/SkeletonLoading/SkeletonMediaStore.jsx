import Skeleton from "./Skeleton";

const SkeletonMediaStore = ({ items = 8 }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[...Array(items)].map((_, index) => (
        <div key={index} className="bg-light-gray rounded-2xl space-y-3 p-4">
          {/* Media */}
          <Skeleton height="h-[250px]" rounded="rounded-xl" />
        </div>
      ))}
    </section>
  );
};

export default SkeletonMediaStore;
