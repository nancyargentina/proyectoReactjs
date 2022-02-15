
export const ItemCount = ({max, min=0, counter, setCounter})=>{
        
    const handleRestar=()=>{
        counter>min && setCounter(counter -1)
    }
    const handleSumar=()=>{
        counter<max && setCounter(counter +1)
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
        </div>
    )
}