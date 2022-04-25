
interface Props {
  title: String;
  image: String;
  subCategory: String;
}


export const CategoryCard = ({
  title,
  image,
  subCategory
}: Props) => {

  return (
    
        <a href={`/${title}`} className="box">
          <img src={`${image}`} alt={`${title}`} />
          <p>{subCategory}</p>
        </a>
    
  );
};
