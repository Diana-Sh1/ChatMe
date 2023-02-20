import s from  './Header.module.css';


const Header = ()=> {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="https://freepngimg.com/thumb/chat/97427-logo-chat-png-file-hd.png"></img>
                <h1>chatMe</h1>
            </div>

        </header>
    )
}
export default Header;