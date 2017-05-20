import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className='newRecipe'>
                <div className='hide'>
                    <label htmlFor="name">Recipe Name</label>
                    <input id='name' name='name' type='text' placeholder='Special Sandwich'/>
                    <br/>
                    <label htmlFor="ingredients">Ingredients (',' seperated)</label>
                    <input id='ingredients' name='ingredients' type='text' placeholder='ham, cheese, ketchup, salami'/>
                    <br/>
                    <button type='submit' className='but save' onClick={this.props.onSave}>Save</button>
                    <button className='but discard' onClick={this.props.onDiscard}>Discard</button>
                </div>
            </div>
        );
    }
}

export default Form;