import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";
import { margin, maxWidth } from "@mui/system";

export const StyledAppBar = styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
export const StyledTypography = styled(Typography)({
    borderRadius: 15,
    backgroundColor: 'white',
    border: '1px solid black',
    width: 'max-content',
    paddingLeft: '10px',
    margin: '5px 15px 25px 0',
    display: 'inline-block',
});

