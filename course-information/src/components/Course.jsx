import Header from "./course-components/Header"
import Content from "./course-components/Content"
import Sum from "./course-components/Sum"

const Course = ({
    courses
}) => {
  return (
    <div>
        {courses.map(course => (
            <div>
                 <Header  course = {course} />
                 <Content course = {course} />
                 <Sum     course = {course} />
             </div>
        ))}
    
    </div>
  )
}

export default Course