import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Image = styled('img')({
  width: '100%',
  borderRadius: '4px',
});

const Details = ({ product }) => {
  const { name, description, price, image } = product;

  return (
    <Container container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box mb={2}>
          <Image src={image} alt={name} />
        </Box>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {price}
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus, velit a tempor
          mollis, nibh nibh aliquam augue, vel sodales lectus orci at quam. Maecenas tincidunt
          aliquet est, vitae sodales lorem tincidunt quis. Fusce vitae malesuada augue. Etiam sed
          luctus risus. Sed porta diam et nibh bibendum, eget vestibulum lorem accumsan. Nunc vel
          tortor viverra, finibus purus a, feugiat eros. In hac habitasse platea dictumst. Sed at
          lorem vel arcu tincidunt malesuada quis ac magna.
        </Typography>
      </Grid>
    </Container>
  );
};

export default Details;
