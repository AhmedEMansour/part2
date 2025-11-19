import Part from './Part'

const Content = ({course}) => {
  return (
    <div>
        {course.parts.map(part => (
            <div key = {part.id}>
                <Part part = {part} />
            </div>
        ))}
    </div>
  )
}

export default Content