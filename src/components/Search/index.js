import styles from './Search.module.css';
import Image from 'next/image';
import Lupa from '../../../public/img/lupa.png';

export default function Search(props) {
    return(
        <form className={styles.search}>
            <Image src={Lupa} alt='lupa'/>
            <input className={styles.Search_field} type='text' placeholder='pesquise um 
            de nossos pratos' value={props.value} onChange={props.onChange}
            />
        </form>
    )
}