import Modal from 'react-modal';
import style from './ImageModal.module.css';



export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={style.overlay}
      className={style.modal}
      shouldCloseOnOverlayClick={true}
    >
      <img src={urls.regular} alt={alt_description} className={style.image} />
      <div className={style.info}>
        <p><strong>Author:</strong> {user.name}</p>
        <p><strong>Likes:</strong> {likes}</p>
        {alt_description && <p><strong>Description:</strong> {alt_description}</p>}
      </div>
    </Modal>
  );
}
