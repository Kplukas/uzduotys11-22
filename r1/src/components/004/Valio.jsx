import Sq from "./Sq";

function Valio({paddingas, spalva, bg, cross}) {
    return (
        <>
        <h1 style={{
            backgroundColor: spalva,
            padding: paddingas
        }}>Valio!</h1>
        <Sq bg={bg} cross={cross} />
        </>
    )
}

export default Valio;