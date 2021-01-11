import '@date-io/date-fns';
import { TextField, Button, Box } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import {
    MuiPickersUtilsProvider,
    DateTimePicker,
} from '@material-ui/pickers';
import React, { ChangeEvent, useState } from 'react'
import { IActivity } from '../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
    setEditMode: (editMode: boolean) => void
    activity: IActivity;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
    setEditMode,
    activity: initialFormState,
    createActivity,
    editActivity
}) => {
    // The first commit of Material-UI

    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        } else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: '',
            }
        }
    }

    const [activity, setActivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        (activity.date !== '') ? new Date(activity.date) : null,
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <form onSubmit={handleSubmit} >
            <TextField
                id="standard-full-width"
                fullWidth
                label="Title"
                name="title"
                onChange={handleInputChange}
                value={activity.title}
            />
            <TextField
                id="standard-full-width"
                label="Description"
                name="description"
                fullWidth
                multiline
                rows={2}
                onChange={handleInputChange}
                value={activity.description}
            />
            <TextField
                id="standard-full-width"
                fullWidth
                label="Category"
                name="category"
                onChange={handleInputChange}
                value={activity.category}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Date"
                        name="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </LocalizationProvider>
                {/* <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    name="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    fullWidth
                /> */}
            </MuiPickersUtilsProvider>
            <TextField
                id="standard-full-width"
                fullWidth
                label="City"
                name="city"
                onChange={handleInputChange}
                value={activity.city}
            />
            <TextField
                id="standard-full-width"
                fullWidth
                label="Venue"
                name="venue"
                onChange={handleInputChange}
                value={activity.venue}
            />
            <Box display="flex" pt={2} justifyContent="flex-end">
                <Button
                    type="submit"
                    color="primary"
                >
                    Submit
                </Button>
                <Button
                    onClick={() => setEditMode(false)}
                >Cancel</Button>
            </Box>
        </form >
    )
}
