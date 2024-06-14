import React from 'react';
import { Property } from '../models/Property';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import BedroomIcon from '@mui/icons-material/SingleBed';

interface PropertyCardProps {
  property: Property;
  onExpire: (id: number) => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: 'auto',
  backgroundColor: '#ffffff', // Light background color
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Soft shadow
  borderRadius: 8,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
  },
}));

const PoundIcon: React.FC = () => (
  <Typography component="span" variant="h6" style={{ marginRight: 2 }}>
    £
  </Typography>
);

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onExpire }) => {
  const getStatusColor = () => {
    return property.status === 'active' ? 'green' : 'red';
  };

  return (
    <StyledCard>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            height="150"
            image={property.image}
            alt="Property"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
          <Typography variant="h5" color="primary" style={{ fontWeight: 'bold' }}>
              <Grid container alignItems="center">
                <Tooltip title="Price" placement="top">
                  <PoundIcon />
                </Tooltip>
                {property.price.toLocaleString()}
              </Grid>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {property.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Grid container alignItems="center">
                <Tooltip title="Bedrooms" placement="top">
                  <BedroomIcon style={{ marginRight: 2 }} />
                </Tooltip>
                {property.bedrooms} bedrooms
              </Grid>
            </Typography>
            
            <Typography variant="body2" color={getStatusColor()}>
              Status: {property.status}
            </Typography>
          </CardContent>
          <CardActions>
            {property.status === 'active' && (
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => onExpire(property.id)}
              >
                Mark as Expired
              </Button>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default PropertyCard;
