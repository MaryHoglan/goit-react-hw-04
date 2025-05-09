import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
