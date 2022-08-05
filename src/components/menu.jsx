import React, {Component} from 'react';
import MenuItem from "./menuItem";
// import PropTypes from 'prop-types';


class Menu extends Component {
    render() {
        let allMenu = this.props.data
        let loveData = this.props.loveData
        return (
            <section className = "menu"
                     id = "menu">
                <div className = "section-header">
                    <h3 className = "sub-heading">Our Menu</h3>
                    <h1 className = "heading">Today's Special</h1>
                </div>
                <div className = "box-container">
                    {allMenu.map((item)=>(
                        <MenuItem
                            key={`menu-item-${item["idour_dishes"]}`}
                            love={this.props.love}
                            loveData={loveData}
                            item={item}/>
                    ))}
                </div>
            </section>

    );
    }
}

Menu.propTypes = {};

export default Menu;
