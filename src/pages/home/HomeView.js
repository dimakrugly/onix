import PropTypes from 'prop-types';
import { Header } from '../../components/Header/Header';
import { About } from './components/About/About';
import { Workspace } from './components/Workspace/Workspace';
import { Ceramics } from './components/Ceramics/Ceramics';
import { Collection } from './components/Collection/Collection';
import { Banner } from './components/Banner/Banner';
import { Subscribe } from './components/Subscribe/Subscribe';
import { Footer } from '../../components/Footer/Footer';

export const HomeView = ({
  items,
  onChange,
  isError,
  value,
  onBlur,
  touched,
}) => (
  <>
    <Header />
    <About />
    <Workspace />
    <Ceramics />
    <Collection items={items} />
    <Banner />
    <Subscribe
      onChange={onChange}
      isError={isError}
      value={value}
      onBlur={onBlur}
      touched={touched}
    />
    <Footer />
  </>
);

HomeView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
  )).isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
};
