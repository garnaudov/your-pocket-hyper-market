import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import Parser from "html-react-parser";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  InfoButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  OldPriceContainer,
  PriceContainerDiscounted,
} from "./collection-item.styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);



const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, description, oldPrice, isDiscounted, id } = item;
  console.log("ccc", id)

  
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
}

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        {isDiscounted && <OldPriceContainer>{oldPrice}лв</OldPriceContainer>}
        {isDiscounted ? (
          <PriceContainerDiscounted>{price}лв</PriceContainerDiscounted>
        ) : (
          <PriceContainer>{price}лв</PriceContainer>
        )}
      </CollectionFooterContainer>
      <InfoButton onClick={handleClickOpen} inverted>
        Виж детайли
      </InfoButton>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {Parser(description)}
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Затвори
          </Button>
        </DialogActions>
      </Dialog>
      <AddButton onClick={() => addItem(item)} inverted>
        Добави
      </AddButton>
      
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});



export default connect(null, mapDispatchToProps)(CollectionItem);
