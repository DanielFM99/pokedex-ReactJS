import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import Modal from "../Modal/Modal";
import { closeModal } from "../../redux/actions/modalActions";
import Skills from "./Skills/Skills";
import Status from "./Status/Status";

const styles = {
  title: {
    textAlign: "center",
    color: "rgb(63, 62, 62)",
    marginBottom: "1.5rem",
  },

  status: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    marginLeft: "2rem",
    color: "#f24d67",
    fontSize: 12,
  },

  geral: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: 30,
  },
};

class InfoModal extends React.Component {
  handleCloseModal = () => {
    this.props.dispatch(closeModal());
  };

  render() {
    const { pokemon, openedModal, classes } = this.props;
    return (
      <div>
        <Modal open={openedModal} handleClose={this.handleCloseModal}>
          <h1 className={classes.title}>{pokemon.name}</h1>
          <div className={classes.geral}>
            <img src={pokemon.image} width="300px" alt="Pokemon" />
            <div className={classes.status}>
              <Status
                type={pokemon.type}
                height={pokemon.height}
                weigth={pokemon.weigth}
              />
              <Skills abilities={pokemon.abilities} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { pokemon, openedModal } = state.modal;
  return { pokemon, openedModal };
};

export default connect(mapStateToProps)(withStyles(styles)(InfoModal));
