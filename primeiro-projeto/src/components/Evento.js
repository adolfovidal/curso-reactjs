function Evento({number}) {

    function myEvent() {
        console.log(`Opa, fui ativado! ${number}`)
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Evento