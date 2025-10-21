import React, { useEffect } from 'react'
import { priceData } from '../../utlits/fackData/priceData'
import { Link } from 'react-router-dom'
import { RiArrowRightLine, RiShoppingBasketLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { usePricingStore } from '../../utlits/store/pricing.store';
import { useMenuStore } from '../../utlits/store/menu.store';

const Pricing = () => {
    const { data: pricingData, setData: setPricingData } = usePricingStore();
    const { language } = useMenuStore();

    useEffect(() => {
        setPricingData(language);
    }, [language, setPricingData]);
    const { title, description, plans } = pricingData;

    return (
        <section className="pricing-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>{title}</p>
                                    <h2>{description}</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {plans.map((plan, index) => 
                            <Card key={index} id={index} features={plan.features} price={plan.price} sortInfo={plan.description} title={plan.type} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing


const Card = ({ id, title, price, sortInfo, features }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="pricing-item">
                    <div className="pricing-header">
                        <h4 className="title">{title}</h4>
                        <p className="save-percent" dangerouslySetInnerHTML={{ __html: sortInfo }} />
                        <span className="price">{price}</span>
                    </div>
                    <div className="pricing-details">
                        <ul>
                            {
                                features.map(({ id, feature, unable }) => <li key={id} className={`${unable ? "unable" : ""}`}><i> <RiArrowRightLine size={14} /></i>{feature}</li>)
                            }
                        </ul>
                        <Link to="#" className="theme-btn">Order Now <i><RiShoppingBasketLine size={16} /></i> </Link>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}