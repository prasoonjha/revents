import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export default function NavBar() {
    return (
        <Menu inverted fixed="top">/
            <Container>
                <Menu.Item header >
                    <img src='/assets/logo.png' alt='logo' style={{marginRight:'1em'}}/>
                    Re-vents
                </Menu.Item>
                <Menu name='events'/>
                <Menu.Item>
                    <Button positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{marginLeft:"0.5em"}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}
