import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Header, Menu, Image, Grid, Dropdown, Segment, Sidebar } from 'semantic-ui-react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const MenuSidebar = () => {
    <Sidebar.Pushable as={Segment}>
        <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible
        >
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                FRUIT TEAS
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                MILK TEAS
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                COFFEE
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                ESPRESSO ~ FLAVORS
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                MILK ALTERNATIVES
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='heart outline'/>
                TOPPINGS
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
            <Segment basic>
                <Header as='h3'>We List Bobas Here</Header>
                <Image src='/Boba.jpeg'/>
            </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
}

class TopMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu
                        name="home"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}}
                    />
                    <Menu
                        name="order online"
                        active={activeItem === 'order online'}
                        onClick={this.handleItemClick}}
                    />
                    <Menu
                        name="about us"
                        active={activeItem === 'about us'}
                        onClick={this.handleItemClick}}
                    />
                    <Menu
                        name="location"
                        active={activeItem === 'location'}
                        onClick={this.handleItemClick}}
                    />
                </Menu>

                <Segment>
                    <div>
                        <Header>Fruit Teas</Header>
                        <Header>Milk Teas</Header>
                        <Header>Coffee</Header>
                        <Header>Espresso ~ Flavors</Header>
                        <Header>Toppings</Header>
                        <Header>Milk Alternatives</Header>
                    </div>
                </Segment>
            </div>
        )

    }

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
