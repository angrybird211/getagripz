import React from 'react';

const BrandBar = () => {
    return (
        <div className="bg-primary d-flex">
            <div className="brand d-flex marquee">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item =>
                        <div className="d-flex align-items-center" key={`bran-${item}`}>
                            <p className="text-lg text-white">
                                #getapripz
                            </p>

                            <p className="text-lg text-white">.</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BrandBar;