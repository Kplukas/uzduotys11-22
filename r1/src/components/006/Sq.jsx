function Sq({sq}) {
    return (<div className='sq' style={{
        backgroundColor: sq.color
    }}>
        square id: {sq.id}
        </div>)
}

export default Sq;