import Card from "../components/Card";
import useStoreData from "../common/useStoreData";

const Showroom = () => {
    const {cakeList} = useStoreData(null);
    return (
        <div>
            <p className="showroom-heading">New Products</p>      
            <div className="cards-container">
                {cakeList.map((cake) => (
                    <Card key={cake.id} cake={cake} />
                ))}
            </div> 
        </div>
    )
}

export default Showroom;