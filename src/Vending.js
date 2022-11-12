import Items from './Items';
import './Vend.css';
const Vending = () => {
    return (
        <>
            <div className='columnleft'>
                <img src="../public/vending-mc.jpg" alt="vendingmachine"></img>
            </div>
            <div className="columnright">
                <h1>HELLO, I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT</h1>
                <Items />
            </div>
            
        </>
    )
}

export default Vending;