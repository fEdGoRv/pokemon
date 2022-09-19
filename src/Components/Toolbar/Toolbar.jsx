import React from 'react'
import { NavLink } from "react-router-dom"
import { Flex, Text, Spacer } from '@chakra-ui/react'
import logo from "../../Assets/Pokebola-pokeball.jpg"

export const Toolbar = () => {
    return (
        <Flex bg="lightgrey">
            <Flex verticalAlign="center">
                <img src={logo} alt="bola" width={100} />
                <Text fontSize='5xl' lineHeight="100px">Tu sitio de pokemon!</Text>
            </Flex>
            <Spacer />
            <Flex>
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
            </Flex>
        </Flex>

    )
}
