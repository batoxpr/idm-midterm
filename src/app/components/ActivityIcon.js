'use-client';

const alone = require ('./images/alone.png');
import group from './images/group.png';


const ActivityIcon = ({participants, type,}) => {
    switch(participants) {
        case 1:
            return <p>This is a one person {type} activity.</p>;
            <img src={alone} />;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return <p>This is a {participants} person {type} activity.</p>;
        default:
            return "Have fun!" ;
    }
}

export default ActivityIcon;