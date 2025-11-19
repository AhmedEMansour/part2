import Header from "./course-components/Header"
import Content from "./course-components/Content"
import Sum from "./course-components/Sum"

const Course = ({
    course
}) => {
  return (
    <div>
        <Header  course = {course} />
        <Content course = {course} />
        <Sum course = {course}/>
    </div>
  )
}

export default Course