import s from 'Sidebar.module.css'

const SideBar = () => {
    return (
        <div className={s.content}>
            <h3>Friends</h3>
            <div className={s.block}>
                <div className={s.item}>
                    <img src="" alt=""/>
                    <span className={s.user}></span>
                </div>

            </div>
        </div>
    )
}
export default SideBar;