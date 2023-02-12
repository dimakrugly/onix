import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';
import { About } from './components/About/About';
import { Workspace } from './components/Workspace/Workspace';
import { Ceramics } from './components/Ceramics/Ceramics';
import { Collection } from './components/Collection/Collection';
import { Banner } from './components/Banner/Banner';
import { Subscribe } from './components/Subscribe/Subscribe';
import { Footer } from '../../components/Footer/Footer';

export const HomeView = ({ items, onChange }) => (
  <>
    <Header />
    <About />
    <Workspace />
    <Ceramics />
    <Collection items={items} />
    <Banner />
    <Subscribe onChange={onChange} />
    <Footer />
  </>
);

HomeView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    item: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};
