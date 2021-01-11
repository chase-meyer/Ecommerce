import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react';

interface IProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const ProductsMain: React.FC<IProps> = ({ }) => {
    const classes = useStyles();


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                </Grid>
            </Grid>
        </div>
    )
}
