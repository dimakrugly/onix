import React, { Component } from 'react';
import './withUpButton.scss';
import { Button } from '../components/Button/Button';
import { buttonVariants } from '../constants/constants';

const withUpButton = (WrappedComponent) => class extends Component {
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
    this.setState({
      isShownScrollButton: scrollY > 500,
    });
  };

  render() {
    const { isShownScrollButton } = this.state;
    return (
      <>
        <WrappedComponent />
        <div className={`upButtonArea ${isShownScrollButton ? 'visible' : null}`}>
          <Button
            text="Up!"
            variant={buttonVariants.secondary}
            type="button"
            onClick={this.scrollToTop}
          />
        </div>
      </>
    );
  }
};

export default withUpButton;
