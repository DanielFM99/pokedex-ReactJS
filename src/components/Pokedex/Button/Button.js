import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import CategoryIcon from "@material-ui/icons/Category";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 10,
    height: 50,
    marginTop: 8,
    cursor: "pointer",
    width: "100%",
  },
  actived: {
    backgroundColor: "white",
  },
  disatived: {
    backgroundColor: "#efa3b0",
  },
  link: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
  },
  text: {
    color: "#3498DB",
    fontBold: 800,
  },
  image: {
    filter:
      "invert(34%) sepia(94%) saturate(1094%) hue-rotate(319deg) brightness(92%) contrast(89%)",
  },
});

function CustomButton(props) {
  const location = useLocation();
  const { image, selectedPage, label, classes } = props;
  return (
    <Link to={selectedPage} className={classes.link}>
      <button
        className={classnames(
          classes.button,
          selectedPage === location.pathname
            ? classes.actived
            : classes.disatived
        )}
      >
        {image === "CategoryIcon" ? (
          <CategoryIcon className={classes.image} alt="Imagem" />
        ) : (
          <StarIcon className={classes.image} alt="Imagem" />
        )}
        <Typography className={classes.text}>{label}</Typography>
      </button>
    </Link>
  );
}

export default withStyles(styles)(CustomButton);
