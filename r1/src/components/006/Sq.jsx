import { useEffect } from "react";

function Sq({square, setSq}) {

    useEffect(() => {
        console.log('new', square.id);
        return () => {
            console.log('gone', square.id);
        }
    }, []);

    const delSq = () => {
        setSq(s => s.filter(oneSq => oneSq.id !== square.id))
    }

    return (
    <div className='sq' style={{
        backgroundColor: square.color
    }} onClick={delSq}>
        square id: {square.id}
        </div>
        )
}

export default Sq;