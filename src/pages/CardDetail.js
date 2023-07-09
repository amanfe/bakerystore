import useStoreData from "../common/useStoreData";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const CardDetail = () => {
  let { id } = useParams();
  const { cakeList } = useStoreData(id);
  const { title, price, previewDescription, detailDescription, image } =
    (cakeList?.length && cakeList[0]) || {};
  return cakeList.length ? (
    <div className="cardDetail">
      <h3>CardDetail</h3>
      <img className="img" src={image} />
      <div className="title">{title}</div>
      <div className="previewDescription">{previewDescription}</div>
      <div className="detailDescription">{detailDescription}</div>
      <div className="price">{price}</div>
    </div>
  ) : (
    <div className="align-item-center"> Page detail not found</div>
  );
};

export default CardDetail;
