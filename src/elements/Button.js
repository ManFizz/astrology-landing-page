function Button({text}) {
    const press = () => {
        document.getElementById("dialog").showModal();
    }

    return (
        <input className="button" type="button" value={text}  onClick={press} />
    )
}

export default Button;