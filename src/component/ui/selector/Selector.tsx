export const Selector = ( {sizes} ) => {
  
  return (
      <div className="selector">
        {
          sizes.map((data, i) => (
            <div className='size' key={i}>
              {data}
            </div>
          ))
        }
      </div>
  )
}