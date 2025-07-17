import ModalContainer from "./ModalContainer";

const MediaModal = ({ openModal, setOpenModal, media, type }) => {
  return (
    <ModalContainer openModal={openModal} setOpenModal={setOpenModal}>
      <div className="w-full h-full flex items-center">
        {type === "videos" ? (
          <video
            src={media}
            alt="media"
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={media}
            alt="media"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </ModalContainer>
  );
};

export default MediaModal;
