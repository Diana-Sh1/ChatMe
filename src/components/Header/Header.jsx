import s from './Header.module.css';
import logo from '../../assets/logo.svg'


const Header = ()=> {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src={logo}></img>
            </div>

        </header>
    )
}
export default Header;