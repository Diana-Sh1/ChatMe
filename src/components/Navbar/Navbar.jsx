import s from "./Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Messages</a></li>
                <li><a href="my-app/src/components">News</a></li>
                <li><a href="my-app/src/components">Music</a></li>
                <br/>
                <li><a href="my-app/src/components">Settings</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;