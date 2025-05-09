import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={style.gallery}>
      {images.map(image => (
        <li key={image.id} className={style.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
