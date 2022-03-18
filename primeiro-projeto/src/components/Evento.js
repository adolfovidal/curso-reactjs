import Button from './Events/Button'

function Evento() {
    function myEvent() {
        console.log(`Activating the first event!`)
    }

    function secondEvent() {
        console.log(`Activating the second event!`)
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={myEvent} text="First Event" /> 
            <Button event={secondEvent} text="Second Event" />
        </div>
    )
}

export default Evento