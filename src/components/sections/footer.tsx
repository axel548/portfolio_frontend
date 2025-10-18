import React from 'react'
import { Link } from 'react-router-dom'
import { useGeneralStore } from '../../utlits/store/general.store';

const Footer = () => {
    const { data: generalData } = useGeneralStore();
    const year = new Date().getFullYear()
    const general = generalData;
    const copyright = general?.copyright || "Copyright @ All Rights Reserved.";

    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>
                                    {/* Copyright @{year}, <Link to="/"></Link> All
                                    Rights Reserved. */}
                                    {copyright}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer