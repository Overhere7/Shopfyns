import s from "./PopularCategoryPage.module.css";
import sideLogo from '../images/store-graphics.svg';
import { useParams } from 'react-router-dom';

import shopLogo2 from '../images/stores-logo-2.svg';




const PopularCategoriesPage = () => {
    const { category } = useParams(); 
    const data = [
        {id: 1, name: "SuperMart", category: "Groceries", distance: "9.3 mi", imgUrl: "src/images/stores-logo-1.svg"},
        {id: 2, name: "FreshMart", category: "Groceries", distance: "5.2 mi", imgUrl: "../images/stores-logo-1.svg" },
        {id: 3, name: "QuickShop", category: "Groceries", distance: "7.1 mi", imgUrl: "../images/stores-logo-1.svg"},
        {id: 1, name: "SuperMart", category: "Groceries", distance: "9.3 mi", imgUrl: "/Users/tarway/Downloads/Grocery-react-main/src/images/stores-logo-3.svg"},
        {id: 2, name: "FreshMart", category: "Groceries", distance: "5.2 mi", imgUrl: "/shopLogo.svg"},
        {id: 3, name: "QuickShop", category: "Groceries", distance: "7.1 mi", imgUrl: "/shopLogo.svg"},
        {id: 1, name: "SuperMart", category: "Groceries", distance: "9.3 mi", imgUrl: "/shopLogo.svg"},
        {id: 2, name: "FreshMart", category: "Groceries", distance: "5.2 mi", imgUrl: "/shopLogo.svg"},
        {id: 3, name: "QuickShop", category: "Groceries", distance: "7.1 mi", imgUrl: "/shopLogo.svg"},
        {id: 1, name: "SuperMart", category: "Groceries", distance: "9.3 mi", imgUrl: "/shopLogo.svg"},
        {id: 2, name: "FreshMart", category: "Groceries", distance: "5.2 mi", imgUrl: "/shopLogo.svg"},
        {id: 3, name: "QuickShop", category: "Groceries", distance: "7.1 mi", imgUrl: "/shopLogo.svg"},
    ];
    

    return (
        <div className={s.mainContainer}>
            <div className={s.headContainer}>
                <div className={s.headTextContainer}>
                    <p className={s.headText}>{category}</p>
                </div>
                <div>
                    <img src={sideLogo} className={s.sideLogo} alt="Side Logo"/>
                </div>
            </div>
            
            <div className={s.storeContainer}>
                {data.map((store) => (
                    <div key={store.id} className={s.storeCard}>
                        <div className={s.shopCardLogoContainer}><img src={shopLogo2} alt={store.name} className={s.storeLogo} /></div>
                        <div className={s.storeDetails}>
                            <div><p className={s.storeName}>{store.name}</p></div>
                            <div><p className={s.storeCategory}>{store.category}</p></div>
                            <div><p className={s.storeDelivery}>Delivery</p></div>
                            <div><p className={s.storePickUp}>PickUp Available</p></div>
                            <div><p className={s.storeDistance}>{store.distance} away</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCategoriesPage;
