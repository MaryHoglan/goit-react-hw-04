import style from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  const { alt_description, urls } = image;

  return (
    <div className={style.card} onClick={() => onClick(image)}>
      <img
        className={style.image}
        src={urls.small}
        alt={alt_description}
      />
    </div>
  );
}
