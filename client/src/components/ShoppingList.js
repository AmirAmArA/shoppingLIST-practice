import React, { Component ,useState} from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CSSTransition, TransitionGroup } from "react-transition-group";
import '../styles.css';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions';
import {PropTypes} from 'prop-types';

export class ShoppingList extends Component {

  componentDidMount() {
    this.props.getItems();
  }
  
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render() {
    const { items } = this.props.item;
    console.log(items);
    return (
      <Container>
         <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={200} className="shade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

// ShoppingList.propTypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
