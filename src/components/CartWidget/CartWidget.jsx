import { Flex, Text } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return(
        <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"60px"}>
            <FaShoppingCart size={25}/>
            <Text fontSize={"1.5rem"}>0</Text>
        </Flex>
    )
}

export default CartWidget