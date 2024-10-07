const AppHeader = () => {
    return(
        <>
        <header className="header">
        <a className="header-marvel" href="1"><span style={{color: '#9f0013'}}>Marvel</span> information portal</a>
            <ul className="header-ul">
                <li style={{color:' #9f0013'}} className="characters">Characters</li>
                <li>/</li>
                <li className="comics">Comics</li>
            </ul>
    </header>
        </>
      
    )
}
export default AppHeader