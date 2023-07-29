import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'semantic-ui-css/semantic.min.js';
import { Container, Header, Menu, Image, Grid, Dropdown, Segment, Sidebar, Icon } from 'semantic-ui-react';
//import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";




class MainMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu
                        name='order online'
                        active={activeItem === 'order online'}
                        onClick={this.handleItemClick}
                    />
                    <Menu
                        name='about us'
                        active={activeItem === 'about us'}
                        onClick={this.handleItemClick}
                    />
                    <Menu
                        name='location'
                        active={activeItem === 'location'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

            </div>
        );

    }

}

class HomeSideMenu extends Component {
  render() {

      return (
        <Header name='h2'>Middle Menu</Header>
        <Sidebar.Pusher>
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
        </Sidebar.Pusher>
      );
  }
}


class BottomMenu extends Component {
  render() {
    return (
        <Container className="footer" textAlign='center'>
          <Grid>
            <Grid.Row>
              (c) 2023 What The Boba Shop <br/>
              Owned and Run by Kapahulu Express Laundromat <br/>
              1234 Pensacola St. Honolulu, HI
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

class BobaWebsite extends React.Component {

  render() {
    return (
      <div>
        <MainMenu/>
        <HomeSideMenu/>
        <BottomMenu/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BobaWebsite />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
