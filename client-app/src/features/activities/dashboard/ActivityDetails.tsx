import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    createStyles,
    makeStyles,
    Theme,
    Typography
} from '@material-ui/core'
import React from 'react'
import { IActivity } from '../../../app/models/activity';
interface IProps {
    activity: IActivity
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        media: {
            height: 180,
        }
    })
);


export const ActivityDetails: React.FC<IProps> = ({
    activity,
    setEditMode,
    setSelectedActivity
}) => {
    const classes = useStyles();

    return (
        <div>
            <Card >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`/assets/categoryImages/${activity.category}.jpg`}
                        title="Title"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {activity.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {activity.date}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {activity.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        onClick={() => setEditMode(true)}
                        size="small"
                        color="primary"
                    >
                        Edit
                </Button>
                    <Button
                        onClick={() => setSelectedActivity(null)}
                        size="small"
                    >
                        Cancel
                </Button>
                </CardActions>
            </Card>
        </div >
    )
}
