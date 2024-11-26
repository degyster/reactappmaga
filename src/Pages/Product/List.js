import CardOfProduct from "../../Components/CardOfProduct/CardOfProduct";

export default function List({ products }) {
    return (
        <div>
            {products.map(elem => (
                <CardOfProduct
                    key={elem.id}
                    img={elem.image}
                    title={elem.title}
                    id={elem.id}
                    price={elem.price}
                    discount_price={elem.discont_price}
                />
            ))}
        </div>
    );
}
