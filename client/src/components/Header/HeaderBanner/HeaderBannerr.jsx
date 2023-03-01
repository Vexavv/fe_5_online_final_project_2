import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';



import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Divider } from '@mui/material';

const HeaderToolbar = () => {
    return (
        <Box disableGutters position="static" sx={{ backgroundColor: '#F5F5F5' }} >
            <Container maxWidth="xl" >
                <Box sx={{
                    display: "flex",
                    justifyContent: { xs: "senter", sm: "senter", md: "space-between" },
                    color: "#1A1A1A",
                    fontSize: '14px',
                    fontFamily: 'Red Hat Display',
                    padding:"10px 0"
                }}>
                    <Box sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: "2 rem",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display'
                    }}>
                        <SvgIcon inheritViewBox sx={{ alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" fill="#1A1A1A" /></svg>
                        </SvgIcon>
                        <Typography sx={{
                            color: "#1A1A1A",
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display'
                        }}>
                            38(044) 222 55 55
                        </Typography>
                        <Divider sx={{ position: 'vertical', mr: 2, backgoundColor: '#00000' }} />
                        <SvgIcon inheritViewBox sx={{ alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" fill="#1A1A1A" /></svg>
                        </SvgIcon>
                        <Typography sx={{
                            color: "#1A1A1A",
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display'
                        }}>
                            e-mail: rubix@gmail.com
                        </Typography>
                    </Box>
                    <Box sx={{
                        flexGrow: { xs: 1, sm: 0 },
                        margin: 'auto',
                        maxHeight: "24px",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: "space-evenly",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display'
                    }}>
                        <Typography sx={{
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display',
                            marginRight: '4px'
                        }} >
                            Free shipping on all orders over <span>$79</span>
                        </Typography>
                        <Typography component={Link}
                            to="/product"
                            sx={{
                                backgroundColor: "#BA933E", color: '#FFFFF', paddingRight: '2px',
                            }}>
                            shop Now!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                        gap:"10px"
                    }}>
                        <Box width={1} height={1}>
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                        </Box>
                        <Box width={1} height={1}>
                            <a href="https://twitter.com/"><FaTwitter /></a>
                        </Box>
                        <Box width={1} height={1}>
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                        </Box>
                        <Box width={1} height={1}>
                            <a href="https://www.pinterest.com/"><FaPinterest /></a>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default HeaderToolbar