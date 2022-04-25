import { DetailImage } from "./DetailImage";
import { DetailContent } from "./DetailContent";
import { IProduct } from "../../../interface";
import { FC } from "react";

interface Props {
  product: IProduct;
}

export const Detail: FC<Props> = ({product}) => {
  return (
    <>
      
      <section className="detail">
        {/* <!-- card left --> */}
        <DetailImage product={product} />
        {/* <!-- card right --> */}
        <DetailContent product={product} />
      </section>

      
    </>
  );
};
