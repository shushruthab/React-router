import { Link } from "react-router-dom";

const CONTENTS = ['SODA', 'CHIPS', 'SARDINES']
const Items = () => {
    return (        
        <ul>
            {CONTENTS.map(c => (
                    <li><Link to={`/${c.toLowerCase()}`}>{c}</Link></li>    
            ))}
        </ul>
    )

}

export default Items;