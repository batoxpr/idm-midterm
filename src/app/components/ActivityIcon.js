'use-client';

import styles from "./BoredCard.module.css";
import Image from 'next/image'


const ActivityIcon = ({participants, type,}) => {
    switch(participants) {
        case 1:
            return <> <div className={styles.actWrap}><p>This is a one person {type} activity.</p>
            <div className={styles.numberImg}>
                <img src="https://i.pinimg.com/originals/a0/ac/f5/a0acf5ab2cd619deab46210077ed165c.gif" alt="alone"></img>
            </div>
            </div></>;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            return <> <div className={styles.actWrap}><p>This is a {participants} person {type} activity.</p> 
            <div className={styles.numberImg}><img src="https://i.pinimg.com/originals/1a/6f/29/1a6f29751719f398634d5e58d5dd2430.gif" alt="group"></img>
            </div>
            </div></>;
        default:
            return "Have fun!" ;
    }
}

export default ActivityIcon;