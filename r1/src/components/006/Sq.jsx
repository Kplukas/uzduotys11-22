function Sq({square, setSq}) {

    const delSq = () => {
        console.log(square.id + ' destroyed')
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