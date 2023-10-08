import { Box, Typography } from "@mui/material";

import { shades } from "../../theme";
import { useTheme } from "@emotion/react";

const Footer = () => {

    const { palette: { neutral }} = useTheme();

  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
        <Box
         width='80%'
         margin='auto'
         display='flex'
         justifyContent='space-between'
         flexWrap='wrap'
         rowGap='30px'
         columnGap='clamp(20px, 30px, 40px)'
        >
            <Box width='clamp(20%, 30%, 40%)'>
                <Typography variant="h4" fontWeight='bold' mb='30px' color={shades.secondary[500]}>WIMBI</Typography>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nihil magni voluptate odio facilis harum nesciunt quas, sequi officiis est accusamus impedit deleniti maxime fuga sunt eligendi, obcaecati repudiandae, sit voluptatem rem a. Quibusdam, expedita!
                </div>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight='bold' mb='30px'>About Us</Typography>
                <Typography mb='30px'>Careers</Typography>
                <Typography mb='30px'>Our Stores</Typography>
                <Typography mb='30px'>Terms & Conditions</Typography>
                <Typography mb='30px'>Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant="h4" fontWeight='bold' mb='30px'>Customer Care</Typography>
                <Typography mb='30px'>Help Center</Typography>
                <Typography mb='30px'>Truck Your Order</Typography>
                <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
                <Typography mb='30px'>Returns & Refunds</Typography>
            </Box>
            <Box width='clamp(20%, 25%, 30%)'>
                <Typography variant="h4" fontWeight='bold' mb='30px'>Contact Us</Typography>
                <Typography mb='30px'>Dorcol, Belgrade 11000, Serbia</Typography>
                <Typography mb='30px'>Email: exampla@mail.com</Typography>
                <Typography mb='30px'>+38163111222</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer;
