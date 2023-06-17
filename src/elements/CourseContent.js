function CourseContent({content}) {
    return (
        <div className="CourseContent">
            <p className="course-number">Урок {content.id}</p>
            <p className="course-name">{content.name}</p>
            <p className="course-description">{content.description}</p>
        </div>
    )
}

export default CourseContent;