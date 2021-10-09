import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    photos: [
      {
        small: "http://pets-images.dev-apis.com/pets/none.jpg",
        large: "http://pets-images.dev-apis.com/pets/none.jpg",
        medium: "http://pets-images.dev-apis.com/pets/none.jpg",
        full: "http://pets-images.dev-apis.com/pets/none.jpg",
      },
    ],
  };
  render() {
    const { active } = this.state;
    let { photos } = this.props;
    if (!photos.length) {
      photos = [
        {
          small: "http://pets-images.dev-apis.com/pets/none.jpg",
          large: "http://pets-images.dev-apis.com/pets/none.jpg",
          medium: "http://pets-images.dev-apis.com/pets/none.jpg",
          full: "http://pets-images.dev-apis.com/pets/none.jpg",
        },
      ];
    }
    return (
      <div className="carousel">
        <img alt="animal" src={photos[active].large} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              //eslint-disable-next-line
              <img
                alt="animal"
                key={photo.large}
                src={photo.large}
                data-index={index}
                className={index === active ? "active" : ""}
                onClick={(e) => {
                  this.setState({ active: +e.target.dataset.index });
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
