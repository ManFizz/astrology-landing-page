import SwitchItem from "./SwitchItem";

function Switcher({title, content, handler}) {

    const information = content.map((item, index) =>
        <SwitchItem index={index} name={item.name} description={item.description} handler={handler} />
    );

    return (
        <div className="switcher">
            <h2>{title} </h2>
            <ul>
                {information}
            </ul>
        </div>
    )
}

export default Switcher;