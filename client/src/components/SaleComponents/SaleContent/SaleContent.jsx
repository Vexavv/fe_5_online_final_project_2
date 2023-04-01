import React from 'react';
import {Box, Typography, Container} from '@mui/material'
function SaleContent(props) {
    return (
        <Container maxWidth="xl">
<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
    <Typography sx={{
        marginTop:{xs:'20px'},
        marginBottom:{xs:'20px'},
        fontSize:{xs:'25px'},
        fontWeight:700,
        fontFamily:'Red Hat Display',
        color:'#ba933e'

    }}>Sale of Products - 25%</Typography>
</Box>
            <Box display='flex' flexWrap='wrap' >

            </Box>
        </Container>
    );
}

export default SaleContent;