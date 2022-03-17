import Item from "./Item";


function List() {
    return(
       <>
           <h1>Minha Lista</h1>
           <ul>
                <Item marca='Samsung' />        
                <Item marca='Dell' />
                <Item marca='Asus' />       
           </ul>
       </> 
    )
}

export default List