function Sq({bg, cross}) {
    return (

        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: bg,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <strong style={{
                color: cross,
                fontSize: '40px'
            }}>+</strong>
        </div>
    )
}

export default Sq;