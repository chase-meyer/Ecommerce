import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ReactivityLogo } from '../icons/ReactivityLogo'
import { ButtonGroup } from '@material-ui/core';

interface IProps {
    openCreateForm: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: 0,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const AppBarAdmin: React.FC<IProps> = ({ openCreateForm }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ReactivityLogo
                            fontSize="large"
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Admin Console
                    </Typography>
                    <ButtonGroup variant="contained" aria-label="text button group">
                        <Button >Activities</Button>
                        <Button
                            onClick={openCreateForm}
                            color="primary"
                        >Create Activity</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default AppBarAdmin;