import React from 'react';
import $ from 'jquery';
import Item from './Item.js';
import Form from './Form.js';

class Recipes extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        // get recipes from the local storage
        this.setState({
            items: this.getItems()
        });
    }
    deleteItem(name) {
        localStorage.removeItem(name);
        this.setState({
            items: this.getItems()
        });
    }
    getItems() {
        var tempArr = [];
        var recipeObj = this;
        Object.keys(localStorage).forEach(function(key) {
            tempArr.push(<Item 
                            key={key} 
                            name={key} 
                            ingredients={localStorage.getItem(key)} 
                            showIngredients={() => recipeObj.showIngredients(key)}
                            onDelete={() => recipeObj.deleteItem(key)}
                            onEdit={() => recipeObj.editItem(key)}
                        />);
        });
        return tempArr;
    }
    editItem(name) {
        $('.newRecipe > div').removeClass('hide');
        $('.newRecipe > div').addClass('show');
        $('#name').val(name);
        $('#ingredients').val(localStorage.getItem(name));
    }
    showIngredients(name) {
        $('.' + name + ' > ul, .' + name + ' > div').toggleClass('hide');
        $('.view' + name).toggleClass('fa-chevron-down fa-chevron-up');
    }
    discard() {
        $('#name').val("");
        $('#ingredients').val("");
        $('.newRecipe > div').removeClass('show');
        $('.newRecipe > div').addClass('hide');
    }
    save() {
        var recipeName = $("#name").val();
        var recipeIngredients = $("#ingredients").val().split(',');
        localStorage.setItem(recipeName, recipeIngredients);
        this.setState({
            items: this.getItems()
        });
        this.discard();
    }
    render() {
        return (
            <div className='recipes'>
                <Form onDiscard={() => this.discard()} onSave={() => this.save()}/>
                {this.state.items}
            </div>
        );
    }
}

export default Recipes;