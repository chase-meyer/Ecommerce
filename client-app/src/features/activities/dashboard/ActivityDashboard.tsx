import React from 'react'
import { Box, Grid, Paper } from '@material-ui/core'
import { ActivityList } from './ActivityList';
import { IActivity } from '../../../app/models/activity';
import { ActivityDetails } from './ActivityDetails';
import { ActivityForm } from '../../form/ActivityForm';

interface IProps {
    activities: IActivity[]
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
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
//     }),
// );

export const ActivityDashboard: React.FC<IProps> = ({
    activities,
    selectActivity,
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity
}) => {


    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Paper>
                        <ActivityList
                            activities={activities}
                            selectActivity={selectActivity}
                            deleteActivity={deleteActivity}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    {selectedActivity && !editMode && (
                        <ActivityDetails
                            activity={selectedActivity}
                            setEditMode={setEditMode}
                            setSelectedActivity={setSelectedActivity}
                        />
                    )}
                    {editMode && <Box
                        p={2}
                        mt={2}
                        boxShadow={2}
                        borderRadius={3}
                        bgcolor="background.paper"
                    >
                        <ActivityForm
                            key={(selectedActivity && selectedActivity.id) || 0}
                            setEditMode={setEditMode}
                            activity={selectedActivity!}
                            createActivity={createActivity}
                            editActivity={editActivity}
                        />
                    </Box>}
                </Grid>
            </Grid>
        </div >
    )
}
