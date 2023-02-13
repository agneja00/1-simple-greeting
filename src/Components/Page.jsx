import { useState } from "react";
import "./Page.css"

const Page = () => {
    const [text, setText] = useState();
    const myText = "Sveiki atvykę!";
    const handleClick = () => {
        setText(myText);
    }

    return (

        <div className="page">
            <section>
                <img className="image" src="https://miro.medium.com/max/600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg" alt="react" />
            </section>

            <section>
                <button className="btn" onClick={handleClick}>Spustelk</button>
            </section>

            <section>
                {text}
            </section>
        </div>
    )
};

export default Page;