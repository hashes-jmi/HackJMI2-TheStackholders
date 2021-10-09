import { Component } from "react";
import { withRouter } from "react-router-dom"; //eslint-disable-line import/named, import/namespace
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import client from "./petFinder";
class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const response = await client.animal.show(this.props.match.params.id);
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        response.data.animal
      )
    );
  }
  adopt = () => {
    window.location = "http://bit.ly/pet-adopt";
  };

  toggle = () => {
    this.setState({ showModal: this.state.showModal ? false : true });
  };
  render() {
    const {
      type,
      breeds,
      contact,
      photos,
      description,
      name,
      showModal,
    } = this.state;
    if (this.state.loading) {
      return <h2>loading __-</h2>;
    }
    return (
      <div className="details">
        <Carousel photos={photos} />
        <div>
          <h1>{name}</h1>
          <h2>{`${type} — ${breeds.primary} — ${contact.address.city}, ${contact.address.state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={() => {
                  this.toggle();
                }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h2>do you really wanna adopt that pet</h2>
              <div className="buttons"></div>
              <button onClick={this.adopt}>yes</button>
              <button onClick={this.toggle}>no</button>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}
const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
