import style from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
