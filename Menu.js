import React, { Component } from 'react';

// sourced from 
// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe

class Card extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Show menu
                </button>

                {
                    this.state.showMenu
                        ? (
                            <div className="menu">
                                <button> + </button>
                                <button> - </button>
                                <button> x </button>
                                <button> / </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
};

export default Card;