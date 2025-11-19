const Sum = ({course}) => {
    const total = course.parts.reduce((a, b) => a + b.exercises, 0)
  return (
    <p><strong>
        total of {total} exercises
    </strong></p>
  )
}

export default Sum