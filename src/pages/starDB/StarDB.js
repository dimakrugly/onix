import React, { Component } from 'react';
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
      isTopButton: false,
    };
  }

  componentDidMount() {
    AxiosService.getRequest(urlBase.swapi)
      .then((res) => this.setState(() => ({
        items: [
          ...res.results,
        ],
        next: res.next,
        disabled: false,
      }))).then(() => { this.onImageAdd(); })
      .catch((error) => {
        console.log(error);
      });
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
      disabled,
    } = this.state;
    if (!disabled && next !== null) {
      this.setState(() => ({
        disabled: true,
      }));
      AxiosService.getRequest(next)
        .then((res) => this.setState((prev) => ({
          items: [
            ...prev.items,
            ...res.results,
          ],
          next: res.next,
        })))
        .then(() => {
          this.onImageAdd();
        })
        .then(() => {
          this.setState(() => ({
            disabled: false,
            isTopButton: true,
          }));
        });
    }
    if (next === null) {
      this.setState(() => ({
        disabled: true,
      }));
    }
  };

  onImageAdd = () => {
    this.setState((prev) => ({
      items: prev.items.map((item) => ({
        ...item,
        id: extractId(item.url),
        image: `https://starwars-visualguide.com/assets/img/characters/${extractId(item.url)}.jpg`,
      })),
    }));
  };

  render() {
    const { items, disabled, isTopButton } = this.state;

    return (
      <StarDBView
        items={items}
        onItemsLoad={this.onItemsLoad}
        disabled={disabled}
        onScrollUp={this.onScrollUp}
        isTopButton={isTopButton}
      />
    );
  }
}

export default StarDB;
