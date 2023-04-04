import React, { Component } from 'react';
import withUpButton from '../../hoc/withUpButton';
import { StarDBView } from './StarDBView';
import AxiosService from '../../services/AxiosService/AxiosService';
import { extractId } from '../../utils/asynFunctions';
import { urlBase } from '../../constants/urlBase';

class StarDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      next: '',
      items: [],
    };
  }

  componentDidMount() {
    AxiosService.getRequest(urlBase.swapi)
      .then((res) => {
        this.setState({
          items: this.updateItems(res.results),
          next: res.next,
          disabled: false,
        });
      })
      .catch(console.log);
  }

  onScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  onItemsLoad = () => {
    const {
      next,
    } = this.state;
    AxiosService.getRequest(next)
      .then((res) => {
        this.setState((prev) => ({
          items: [
            ...prev.items,
            ...this.updateItems(res.results),
          ],
          next: res.next,
          disabled: res.next === null,
        }));
      });
  };

  updateItems = (arr) => arr.map((item) => ({
    ...item,
    id: extractId(item.url),
    image: `https://starwars-visualguide.com/assets/img/characters/${extractId(item.url)}.jpg`,
  }));

  render() {
    const { items, disabled } = this.state;
    return (
      <StarDBView
        items={items}
        onItemsLoad={this.onItemsLoad}
        disabled={disabled}
        onScrollUp={this.onScrollUp}
      />
    );
  }
}

export default withUpButton(StarDB);