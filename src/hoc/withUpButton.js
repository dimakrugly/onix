import React from 'react';
import './withUpButton.scss';
import { Button } from '../components/Button/Button';
import { buttonVariants } from '../constants/constants';

const withUpButton = (WrappedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShownScrollButton: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  handleScroll = ({ currentTarget: { scrollY } }) => {
    if (scrollY > 500) {
      console.log('CPA6OTALO');
      this.setState(() => ({
        isShownScrollButton: true,
      }));
    } else {
      this.setState(() => ({
        isShownScrollButton: false,
      }));
    }
  };

  render() {
    const { isShownScrollButton } = this.state;
    return (
      <div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <WrappedComponent {...this.props} />
        <div className={`upButtonArea ${isShownScrollButton ? 'visible' : null}`}>
          <Button
            text="Up!"
            variant={buttonVariants.secondary}
            type="button"
            onClick={this.scrollToTop}
          />
        </div>
      </div>
    );
  }
};

export default withUpButton;
