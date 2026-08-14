import React from 'react';
import ProductIntroHeader from './ProductIntroHeader';
import ProductIntroVisual from './ProductIntroVisual';
import ProductWorkflow from './ProductWorkflow';
import './ProductIntro.css';

/**
 * ProductIntro Component
 * "WHAT THE PRODUCT IS..." Section Frame.
 * Substantial neo-brutalist panel framing the asymmetric 2-column product introduction
 * and bottom 4-step workflow strip.
 */
export default function ProductIntro() {
  return (
    <section id="what-is-hacksaathi" className="product-intro-frame">
      {/* Asymmetric 2-column content row */}
      <div className="product-intro-top">
        <ProductIntroHeader />
        <div className="product-intro-right">
          <ProductIntroVisual />
        </div>
      </div>

      {/* Product workflow panel */}
      <ProductWorkflow />
    </section>
  );
}
