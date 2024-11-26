import Banner from '../../Components/Banner/Banner';
import FormForDiscount from '../../Components/FormForDiscount/FormForDiscount';
import LocateButton from '../../UI/LocateButton/LocateButton';
import CategoryList from '../Categories/CategoriesList';
import ProductsList from '../Sales/SalesList';

function HomePage() {
    return (
        <div className="home-page-container">
            <Banner />
            <LocateButton header="Explore Categories" link="/categories/all" linkText="View All Categories" />
            <CategoryList count={4} />
            <div className="discount-section">
                <FormForDiscount />
            </div>
            <LocateButton header="Latest Sales" link="/products/sales" linkText="See All Sales" />
            <ProductsList title="Featured Sales" type="homesale" displayCount={4} />
        </div>
    );
}

export default HomePage;
