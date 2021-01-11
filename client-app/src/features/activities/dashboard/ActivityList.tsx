import {
    Avatar,
    Button,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';
import React from 'react'
import { IActivity } from '../../../app/models/activity';

interface IProps {
    activities: IActivity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         paper: {
//             padding: theme.spacing(1),
//             textAlign: 'center',
//             color: theme.palette.text.secondary,
//         },
//         viewButton: {
//         }
//     }),
// );

export const ActivityList: React.FC<IProps> = ({
    activities,
    selectActivity,
    deleteActivity
}) => {

    return (
        <div>
            <List component="nav">
                {activities.map((activity: IActivity) => (
                    <ListItem key={activity.id} divider>
                        <Grid container spacing={4}>
                            <Grid item>
                                <ListItemAvatar>
                                    <Avatar alt="" src="" />
                                </ListItemAvatar>

                                <ListItemText
                                    primary={activity.title}
                                    secondary={activity.date} />
                                <ListItemText
                                    primary={activity.description}
                                    secondary={<React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >
                                            {activity.city}, {activity.venue}
                                        </Typography>
                                    </React.Fragment>} />
                                <ListItemText
                                    primary={<React.Fragment>
                                        <Button
                                            size="small"
                                            color="default"
                                            variant="outlined"
                                            disabled
                                        >
                                            {activity.category}
                                        </Button>
                                    </React.Fragment>} />
                            </Grid>
                            <Grid
                                item
                                container
                                spacing={2}
                                alignContent="flex-end"
                                justify="flex-start"
                                direction="row-reverse"
                                style={{ padding: 20 }}
                                xs={8}
                            >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        onClick={() => selectActivity(activity.id)}
                                    >
                                        View
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="secondary"
                                        onClick={() => deleteActivity(activity.id)}
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItem>
                ))}
            </List>
        </div >
    )
}
