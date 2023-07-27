import { Box, Flex } from "@chakra-ui/react";
import { CarouselMenu } from "../components/carouselMenu";
import { ListMenu } from "../components/listMenu";
import { Footer } from "../components/footer";

export const HomePage = () => {
    try {
        
    } catch (err) {
        console.log(err);
    }

    return (
        <Box 
            p={"1%"} 
            bgColor={"gray.300"}
            minH={"100vh"}
        >
            <CarouselMenu/>
            <Flex 
                direction={{base:"column",lg:"row"}}
                justifyContent={"center"}
                flexWrap="wrap"
            >
                <ListMenu/>
                <ListMenu/>
                <ListMenu/>
                <ListMenu/>
                <ListMenu/>
            </Flex>
            <Footer/>
        </Box>
    )
}