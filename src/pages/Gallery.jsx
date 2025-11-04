import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Gallery from '../components/Gallery';
import { getContent, bilingual } from '../utils/language';
import { initScrollAnimations } from '../utils/animations';
import '../styles/main.css';

const GalleryPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Generate placeholder images
  const images = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/${i < 6 ? `computer-image-${i + 1}.jpg` : `image-${i - 5}.jpg`}`,
    alt: `Bharathi Computer Center - ${i < 6 ? 'Computer Center' : 'Service'} ${i < 6 ? i + 1 : i - 5}`,
  }));

  return (
    <>
      <Helmet>
        <title>Gallery — Bharathi Computer Center | Our Workspace & Services</title>
        <meta
          name="description"
          content="View our workspace, services, and facilities at Bharathi Computer Center in Vijayamangalam."
        />
      </Helmet>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <h1 className="text-center" style={{ marginBottom: '1rem' }}>
            {getContent(bilingual('Gallery', 'கேல்லரி'))}
          </h1>
          <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--text-secondary)' }}>
            {getContent(
              bilingual(
                'Take a look at our workspace and services',
                'எங்கள் பணியிடம் மற்றும் சேவைகளைப் பாருங்கள்'
              )
            )}
          </p>

          <Gallery images={images} />
        </div>
      </section>
    </>
  );
};

export default GalleryPage;

