import React, {useState} from 'react';
import styles from './ProductsNav.module.scss'
import TuneIcon from "@mui/icons-material/Tune";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import SelectSort from "../SelectSort/SelectSort";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import ProductFilter from "../ProductsFilter/ProductFilter";

function ProductsNav() {
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
    const mobileFilterToggle = () => {
        setMobileFilterOpen(current => !current)
    }
    return (
        <nav className={styles.Nav}>
            <div className={styles.NavFilter}>
                <TuneIcon onClick={mobileFilterToggle}  sx={{display:{xs:'flex', sm:'flex', md:'none'}, color: '#ba933e', marginRight:1}}/>
                <span className={styles.NavFilterText}>Filter</span>
                <ToggleButtons />
                <Drawer
                    anchor="left"
                    component="div"
                    variant="temporary"
                    open={mobileFilterOpen}
                    onClose={mobileFilterToggle}
                    ModalProps={{ keepMounted: true }}
                    SlideProps={{ timeout: 400 }}
                    sx={{
                        display:{md: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: { xs: '70%', sm: '50%', md: 'none' },
                            color: "#1A1A1A",
                            display:{md: 'none'}
                        }
                    }}>
                    <Box
                        sx={{
                            p: 2,
                            height: 1,
                            backgroundColor: "white"
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={mobileFilterToggle}
                            color="black" sx={{ mb: 2 }} >
                            <CloseIcon />
                        </IconButton>
                        <ProductFilter/>
                    </Box>
                </Drawer>
            </div>
            <SelectSort/>
        </nav>
    );
}

export default ProductsNav;