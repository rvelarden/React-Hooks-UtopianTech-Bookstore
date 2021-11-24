const Navbar = ()=>{
    return(
        <div>
        <a href='/spanish' >Español</a>
        <a href='/' >English</a>

        <h1 className="center-text font-text-text">CART</h1> 
            <h1 className="center-text font-text-text">Total: ${cartTotal}</h1>
            <div>
            <br></br>
            <button className="center-button" onClick={() => setCart([])}>Clear</button>
        </div>
    )
}

export default Navbar