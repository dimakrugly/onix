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
  onChangeMailInput,
  isError,
  value,
  onBlur,
  touched,
  onCheckedMail,
  checked,
  disabled,
}) => (
  <>
    <Header />
    <About />
    <Workspace />
    <Ceramics />
    <Collection items={items} />
    <Banner />
    <Subscribe
      onChangeMailInput={onChangeMailInput}
      isError={isError}
      value={value}
      onBlur={onBlur}
      touched={touched}
      onCheckedMail={onCheckedMail}
      checked={checked}
      disabled={disabled}
    />
    <Footer />
  </>
);

HomeView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string,
  )).isRequired,
  onChangeMailInput: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  onCheckedMail: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

HomeView.defaultProps = {
  value: '',
};
