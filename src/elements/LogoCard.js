import {useState} from "react";
import Button from "./Button";
import CourseContent from "./CourseContent";
import Switcher from "./Switcher";

function LogoCard({information}) {
    const [content, setContent] = useState({
        id: 1,
        name: information[0].name,
        description: information[0].description
    });

    return (
        <div className="logo-card">
            <h5>ЗНАНИЯ, КОТОРЫЕ ИЗМЕНЯТ ТВОЮ ЖИЗНЬ</h5>
            <h1>Астрология для всех</h1>
            <Button text="Записаться на курс" />
            <CourseContent content={content}/>
            <Switcher title={"Выберите урок"} content={information} handler={setContent}/>
        </div>
    )
}

export default LogoCard;