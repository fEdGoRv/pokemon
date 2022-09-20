
import { NavLink } from "react-router-dom"
import { Flex, Text, Spacer, Container, HStack } from '@chakra-ui/react'
import logo from "../../Assets/Pokebola-pokeball.jpg"

export const Toolbar = () => {
    return (
        <Flex>
            <img src={logo} alt="bola" width={100} />
            <Spacer />
            <NavLink to="/">
                <Text lineHeight="100px" fontSize='5xl' >Your pokemon website</Text>
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to="/categoty/Fire" >
                    <Text fontSize='5xl' m={5} >Fire</Text>
                </NavLink>
                <NavLink to="category/Air" >
                    <Text fontSize='5xl' m={5}>Air</Text>
                </NavLink>
                <NavLink to="category/Grass">
                    <Text fontSize='5xl' m={5} >Grass</Text>
                </NavLink>
                <NavLink to="category/water">
                    <Text fontSize='5xl' m={5} >Water</Text>
                </NavLink>
            </HStack>
        </Flex>


    )
}
