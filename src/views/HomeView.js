import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider/Slider';
import ParallaxImage from 'assets/images/summer-sale.jpg';
import Categories from 'components/molecules/Categories/Categories';
import SectionHeader from 'components/molecules/SectionHeader/SectionHeader';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import FeaturedProducts from 'components/organisms/FeaturedProducts/FeaturedProducts';
import Parallax from 'components/molecules/Parallax/Parallax';
import Features from 'components/molecules/Features/Features';

const Wrapper = styled.div`
  margin: 12px;
`;

const HomeView = () => {
  const [isLoaderVisible, setLoaderVisibility] = useState(true);
  const featuredItems = useSelector(({ featured }) => featured);

  useEffect(() => {
    const toggleLoader = () => {
      setLoaderVisibility(false);
    };
    setTimeout(toggleLoader, 900);

    return () => clearTimeout(toggleLoader);
  }, []);
  return (
    <>
      <PageLoader isActive={isLoaderVisible} />
      <Slider />
      <main>
        <Wrapper>
          <Categories />
          {featuredItems.length !== 0 && (
            <>
              <SectionHeader
                title="Trending"
                subTitle="Top view in this week"
              />
              <FeaturedProducts
                products={featuredItems.slice(0, featuredItems.length)}
              />
            </>
          )}
        </Wrapper>
        <Parallax img={ParallaxImage} />
        <Wrapper>
          {featuredItems.length !== 0 && (
            <>
              <SectionHeader
                title="Best sellers"
                subTitle="Top sale in this week"
              />
              <FeaturedProducts
                products={featuredItems.slice(
                  Math.floor(featuredItems.length / 2),
                  featuredItems.length,
                )}
              />
            </>
          )}
          <Features />
        </Wrapper>
      </main>
    </>
  );
};

export default HomeView;
