import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const CoffeCard = (props) => {
  const { avatarSrc, title, subtitle, description, imgSrc } = props;
  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <div style={{ margin: "20px" }}>
            <Typography variant="h5">{`₹${subtitle}`}</Typography>
          </div>
        }
      />
      <CardMedia style={{ height: "200px", width: "400px" }} image={imgSrc} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now </Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default CoffeCard;
