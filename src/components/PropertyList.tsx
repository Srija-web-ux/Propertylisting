import React, { useEffect, useState } from 'react';
import { Property } from '../models/Property';
import { getProperties, updatePropertyStatus } from '../services/propertyService';
import PropertyCard from './PropertyCard';
import FilterControls from './FilterControls';
import { Container, Grid, Typography } from '@mui/material';

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('all');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    const properties = await getProperties();
    setProperties(properties);
  };

  const handleExpire = async (id: number) => {
    await updatePropertyStatus(id, 'expired');
    fetchProperties();
  };

  const filteredProperties = properties.filter(property =>
    filter === 'all' ? true : property.status === filter
  );

  return (
    <Container>
      <FilterControls filter={filter} setFilter={setFilter} />
      <Grid container spacing={4}>
        {filteredProperties.map(property => (
          <Grid item key={property.id} xs={12}>
            <PropertyCard property={property} onExpire={handleExpire} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList;
