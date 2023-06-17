function SwitchItem({index, name, description, handler}) {
    const switchContent = () => {
        handler({id:index+1, name:name, description:description});
    }

    return (
        <li className="switch-item" onClick={switchContent}>{index+1}</li>
    )
}

export default SwitchItem;