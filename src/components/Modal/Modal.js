import React from "react";
import { Dialog } from "@material-ui/core";

class ModalContainer extends React.Component {
  render() {
    const { open, handleClose, children } = this.props;
    return (
      <Dialog
        classes={{ paper: "modal" }}
        onClose={handleClose}
        open={open}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: { borderRadius: 15 },
        }}
      >
        {children}
      </Dialog>
    );
  }
}

export default ModalContainer;
