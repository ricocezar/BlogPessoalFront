import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "#2D2D2D", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "lightgrey" }}>Redes Sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/ricocezar" target="_blank">
                            <GitHubIcon style={{ fontSize: 50, color: "white" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/rcmgodoy" target="_blank">
                            <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#000000", height: "40px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "lightgrey" }} >© 2023 Desenvolvido por Ricardo Marinho</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;