import { SwiperComponent} from "../swiper/Swiper";

import { FC } from "react";
import { IProduct } from "../../../interface";

interface Props {
  product: IProduct;
}

export const DetailImage: FC<Props> = ({product}) => {

  return (
        <div className="image">
          <SwiperComponent image={product.image}/>
        </div>
      
  )
}
