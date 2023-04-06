import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Divider } from '@mui/material';
import styles from './HeaderBanner.module.scss'

const HeaderToolbar = () => {
    return (
        <Box  position="static" sx={{ backgroundColor: '#F5F5F5' }} >
            <Container maxWidth="xl" >
                <Box 
                 sx={{
                    display: {xs:"block", sm:"block", md:"flex",},
                    justifyContent: { xs: "senter", sm: "senter", md: "space-between" },
                    textAlign: 'center',
                    color: "#1A1A1A",
                    fontSize: '14px',
                    fontFamily: 'Red Hat Display',
                    padding:{xs:"10px 5px 20px", sm:"5px 5px"}
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
                       <Link to='tel:+380442225555'><Typography sx={{
                            color: "#1A1A1A",
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display'
                        }}>
                            38(044) 222 55 55
                        </Typography></Link>
                        <Divider sx={{ position: 'vertical', mr: 2, backgoundColor: '#00000' }} />
                        <SvgIcon inheritViewBox sx={{ alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" fill="#1A1A1A" /></svg>
                        </SvgIcon>
                        <Link to='mailto:rubix@gmail.com'><Typography sx={{
                            color: "#1A1A1A",
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display'
                        }}>
                            e-mail: rubix@gmail.com
                        </Typography></Link>
                    </Box>
                    <Box sx={{
                        flexGrow: { xs: 1, sm: 0 },
                        flexWrap:'wrap',
                        textAlign: 'center',
                        maxHeight: "24px",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: "center",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display',                        
                        gap: '4px'
                        
                    }}>
                        <Typography sx={{                           
                            textAlign: 'center',
                            fontSize: '14px',
                            fontFamily: 'Red Hat Display',
                            position: 'relative',
                            '&:after':{content:'" | "', color: '#BA933E', rotate:"90deg", position: 'absolute',right:"5px", top:"7px" },
                            
                        }} >
                            Free shipping on all orders over <span >$79</span>
                        </Typography>
                        <Typography component={Link}
                            to="/product"
                            sx={{
                                display:{xs : 'none', sm: 'center'},
                                backgroundColor: "#BA933E", color: '#FFFFFF', padding: '0 4px',
                                cursor: 'pointer',
                                
                            }}>
                            shop Now!
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                        gap:"10px",
                        alignItems: 'center',
                    }}>
                        <Box width={1} height={0.5}
                        component={Link} to={'https://www.facebook.com/'} sx={{                            
                            color:"#1A1A1A",
                            '&:hover, active':{
                                color: '#BA933E'}
                        }}>
                            <FaFacebookF />
                        </Box>
                        <Box width={1} height={0.5}
                        component={Link} to={'https://www.twitter.com/'} sx={{
                            color:"#1A1A1A",
                            '&:hover, active':{
                                color: '#BA933E'}
                        }}>
                            <FaTwitter />
                        </Box>
                        <Box width={1} height={0.5} component={Link} to={'https://www.instagram.com/'} sx={{
                                color:"#1A1A1A",
                                '&:hover, active':{
                                    color: '#BA933E'}
                            }}> 
                        
                            <FaInstagram />
                        </Box>
                        <Box width={1} height={0.5}
                        component={Link} to={'https://www.pinterest.com/'} sx={{
                            color:"#1A1A1A",
                            '&:hover, active':{
                                color: '#BA933E'}
                        }}>
                            <FaPinterest />
                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default HeaderToolbar