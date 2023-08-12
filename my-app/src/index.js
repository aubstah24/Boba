import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'semantic-ui-css/semantic.min.js';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Container, Header, Menu, Image, Grid, Dropdown, Segment, Sidebar, Icon, Arrow } from 'semantic-ui-react';
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
                        active={activeItem === 'orderonline'}
                        onClick={this.handleItemClick}
                    />
                    <Menu
                        name='about us'
                        active={activeItem === 'aboutus'}
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

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Icon name='arrow left' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </Icon>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Icon name='arrow right' disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </Icon>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);


  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}


class HomeSideMenu extends Component {


      const getItems = () =>
              Array(20)
                .fill(0)
                .map((_, ind) => ({ id: `element-${ind}` }));
                
  render() {

          const [items, setItems] = React.useState(getItems);
            const [selected, setSelected] = React.useState([]);
            const [position, setPosition] = React.useState(0);

            const isItemSelected = (id) => !!selected.find((el) => el === id);

            const handleClick =
              (id) =>
              ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                  itemSelected
                    ? currentSelected.filter((el) => el !== id)
                    : currentSelected.concat(id)
                );
              };

      return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {items.map(({ id }) => (
            <Card
              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}selected={isItemSelected(id)}/>
          ))},
        </ScrollMenu>
      )
  }
}

const SidebarVisible = () => (
        <div>
            <Header name='h2'>Middle Menu </Header>

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
                        <Image src='../Boba.jpeg'/>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
)

class FirstBody extends Component {
    render () {
        return (
            <div>
                <p>
                    This is the first body of the webpage
                </p>
            </div>
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
        <SidebarVisible/>
        <FirstBody/>
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
