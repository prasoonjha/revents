import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function EventDashboard() {
    return (
        <Grid>
            <Grid.Column width={10} color="blue"><h2>Left column</h2></Grid.Column>
            <Grid.Column width={6} color="red"><h2>right column</h2></Grid.Column>
        </Grid>
    )
}
