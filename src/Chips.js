import { useState } from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    const [count, setCount] = useState(0);

    const eat = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1> BAGS EATEN: {count}</h1>
            <button onClick={eat}>NOM NOM NOM</button><br />
            <Link to='/'>Back to Vending Machine</Link>
        </div>
    )
}

export default Chips;