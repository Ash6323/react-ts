import UserAvatar from '../res/img-avatar.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h3>Grocery App</h3>
            <div className="links">
                <img src={UserAvatar} alt="Avatar" className="avatar"/>
            </div>
        </nav>
    );
};

export default Navbar;
