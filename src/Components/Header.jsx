import "./Header.css"

const Header = (props) => {
   
    return (
        <header className="header"> {props.children}
            <a href="#">React</a>
            <a href="#">React</a>
            <a href="#">React</a>
        </header>
    );
};

export default Header;