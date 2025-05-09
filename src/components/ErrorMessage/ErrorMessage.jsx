import style from './ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>❌ {message || 'Something went wrong. Please try again.'}</p>
    </div>
  );
}
