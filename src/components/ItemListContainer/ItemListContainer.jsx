import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"}>
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Link to={`/item/${product.id}`}>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              {/* <Text>{product.description}</Text> */}
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
            </Link>
            
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button colorScheme="blue">
                Add to cart
              </Button>
              <Button colorScheme="green">
                Buy now
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};