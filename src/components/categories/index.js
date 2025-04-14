import styles from './Categories.module.css';
import Image from 'next/image';

import Entrada from '../../../public/entrada.png';
import Massa from '../../../public/massa.png';
import Carne from '../../../public/carne.png';
import Bebidas from '../../../public/bebidas.png';
import Salada from '../../../public/salada.png';
import Sobremesa from '../../../public/sobremesa.png';

export default function Categories(props) {
    const handleSelectBtn = (category) => {
        props.selectdBtn == category && styles.selectdBtn;
    }

    return (
        <section className={styles.categories}>
            <button onClick={props.onClickEntradas} className={`${styles.btn}
             ${handleSelectBtn('Entradas')}`}><Image src={Entrada}
              alt='prato de entrada'/> <span>Entrada</span>
              </button>

              <button onClick={props.onClickMassa} className={`${styles.btn}
             ${handleSelectBtn('Massas')}`}><Image src={Massa}
              alt='prato de entrada'/> <span>Massa</span>
              </button>

              <button onClick={props.onClickCarnes} className={`${styles.btn}
             ${handleSelectBtn('Carnes')}`}><Image src={Carne}
              alt='prato de entrada'/> <span>Carne</span>
              </button>

              <button onClick={props.onClickBebidas} className={`${styles.btn}
             ${handleSelectBtn('Bebidas')}`}><Image src={Bebidas}
              alt='prato de entrada'/> <span>Bebidas</span>
              </button>

              <button onClick={props.onClickSaladas} className={`${styles.btn}
             ${handleSelectBtn('Saladas')}`}><Image src={Salada}
              alt='prato de entrada'/> <span>Salada</span>
              </button>

              <button onClick={props.onClickSobremesas} className={`${styles.btn}
             ${handleSelectBtn('Sobremesas')}`}><Image src={Sobremesa}
              alt='prato de entrada'/> <span>Sobremesa</span>
              </button>

        </section>
    )
}