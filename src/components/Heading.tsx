
interface HeadingTitle{
    title : string
}
const Heading = ({title} : HeadingTitle) => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading