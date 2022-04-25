import { initialData } from "../../../../data";


interface State {
  Banner: any;
}

export const BannerLayout = () => {
const { homeBanners } = initialData;
  return (
    <section className="banner">
      {homeBanners.map((data, i) => (
        <div className="box" key={i}>
          <img src={`${data.image}`} alt="" />
          <div className="content">
            <span>Oferta especial</span>
            <h3>{data.content}</h3>
            <a href="#" className="btn">
              ver productos
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};
