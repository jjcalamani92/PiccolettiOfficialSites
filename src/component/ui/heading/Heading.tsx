
export const HeadingPrimary = ( props:any ) => {
  const {titleP, titleS} = props;
  return (
      <h1 className="headingPrimary" > {titleP} <span>{titleS}</span> </h1>
  )
}
export const HeadingSecondary= (props:any) => {
  const { title, category } = props;
  return (
    <h1 className="headingSecondary"> <span>{ title }</span> 
    <a href={`${category}`}> ver todo </a> </h1>
  )
}
export const HeadingTertiary = ( props:any ) => {
  const {title} = props;
  return (
      <h1 className="headingTertiary" > {title} </h1>
  )
}
