import React, { Component } from 'react';
import './home.scss';
import { HomeView } from './HomeView';
import { isValidEMail, isTouchedMail } from '../../utils/validation';
import image1 from '../../assets/img/plate.png';
import image2 from '../../assets/img/vaseBlue.png';
import image3 from '../../assets/img/ceramics.png';
import image4 from '../../assets/img/vaseOrange.png';
import image5 from '../../assets/img/vaseBlack.png';
import image6 from '../../assets/img/vaseLava.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        key: '1',
        image: image1,
        title: 'Decor Plate',
        price: '$ 65.00 US',
      },
      {
        key: '2',
        image: image2,
        title: 'Mint Pottery',
        price: '$ 65.00 US',
      },
      {
        key: '3',
        image: image3,
        title: 'Set Of Potterys',
        price: '$ 125.00 US',
      },
      {
        key: '4',
        image: image4,
        title: 'Orange Ceramic',
        price: '$ 55.00 US',
      },
      {
        key: '5',
        image: image5,
        title: 'Dark Bowl',
        price: '$ 115.00 US',
      },
      {
        key: '6',
        image: image6,
        title: 'Square Pottery',
        price: '$ 115.00 US',
      },
      ],
      email: '',
      isError: {
        isMailError: false,
      },
      touched: {
        touchedMail: false,
      },
    };
  }

  // Mail handling
  onChangeMail = (event) => {
    this.setState((prev) => ({
      ...prev,
      email: event.target.value,
    }));
    this.setState((prev) => ({
      ...prev,
      isError: { isMailError: isValidEMail(event.target.value) },
    }));
  };

  onMailBlur = (event) => {
    this.setState((prev) => ({
      ...prev,
      touched: { touchedMail: isTouchedMail(event.target.value) },
    }));
  };

  render() {
    const {
      items, isError, email, touched,
    } = this.state;
    return (
      <HomeView
        items={items}
        onChange={this.onChangeMail}
        isError={isError.isMailError}
        value={email}
        onBlur={this.onMailBlur}
        touched={touched.touchedMail}
      />
    );
  }
}

export default Home;
