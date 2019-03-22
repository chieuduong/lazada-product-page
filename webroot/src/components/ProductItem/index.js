import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({ detailInfo, viewProduct, classes }) {
  return (
    <div className={`card-jfy-item-wrapper hp-mod-card-hover J_Items ${classes}`}>
			<a className="card-jfy-li-content" onClick={viewProduct}>
				<div className="card-jfy-item">
					<div className="card-jfy-image card-jfy-image-background J_GridImage">
						<img className="image" src={detailInfo.itemImg} alt={detailInfo.itemTitle} />
					</div>
					<div className="card-jfy-item-desc">
						<div className="card-jfy-title">
							<span className="title">{detailInfo.itemTitle}</span>
						</div>
						<div className="hp-mod-price">
							<div className="hp-mod-price-first-line">
								<span className="currency">{detailInfo.currency} </span><span className="price">{detailInfo.itemDiscountPrice}</span>
							</div>
							<div className="hp-mod-price-second-line">
								<span className="hp-mod-price-text align-left">
									<span className="currency">{detailInfo.currency}</span>
									<span className="price">{detailInfo.itemPrice}</span>
								</span>
								<span className="hp-mod-discount align-left"> {detailInfo.itemDiscount}</span>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
  );
}

ProductItem.propTypes = {
  detailInfo: PropTypes.object.isRequired,
  viewProduct: PropTypes.func.isRequired,
}

export default ProductItem;