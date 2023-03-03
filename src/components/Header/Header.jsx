import s from './Header.module.css';



const Header = ()=> {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src="logo.svg"></img>
            </div>

        </header>
    )
}
export default Header;