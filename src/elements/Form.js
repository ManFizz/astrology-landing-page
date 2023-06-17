function Form() {

    const submit = (e) => {
        let regexName = new RegExp(/[A-Za-zА-Яа-я0-9_ ]{6,}/gm);
        let regexMail = new RegExp(/^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i);

        let matchName = e.target.querySelector("input[name=name]").value.match(regexName);
        let matchMail = e.target.querySelector("input[name=mail]").value.match(regexMail);
        if(!matchName || !matchMail || matchName[0] !== e.target.querySelector("input[name=name]").value || matchMail[0] !== e.target.querySelector("input[name=mail]").value) {
            e.preventDefault();
            e.target.querySelector("#error-box").textContent = "Поля заполнены не верно";
            return;
        }

        alert("Вы успешно записались!\nСкоро с вами свяжутся!")
    }

    const reset = (e) => {
        document.getElementById("dialog").close();
    }

    return (
        <form onSubmit={submit} onReset={reset}>
            <h2>Запись на курс</h2>
            <label>Имя и фамилия</label><br/>
            <input type="text" placeholder="Введите имя и фамилию" name="name"/><br/><br/>
            <label>Почта</label><br/>
            <input type="text" placeholder="example@mail.com"  name="mail"/><br/>
            <p className="error-box" id="error-box" />
            <input type="submit" value="Записаться"/>
            <input type="reset" value="Отмена"/><br/>
        </form>
    )
}

export default Form;