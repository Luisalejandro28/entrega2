import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <div className="card-item">
      <Card sx={{ width: 345 }}>
        <CardMedia sx={{ height: 340 }} image={img} title={title} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
