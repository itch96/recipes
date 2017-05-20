import React from 'react';

class Item extends React.Component {
    getIngredients() {
        // convert each ingredient from the prop to <li>
        var myArr = [];
        var tempArr = this.props.ingredients.split(',');
        for(var i = 0; i < tempArr.length; i ++) {
            myArr.push(<li key={tempArr[i]}>{tempArr[i]}</li>);
        }
        console.log('getting ingredients');
        console.log(myArr);
        return myArr;
    }
    render() {
        return (
            <div className='item'>
                <div className='itemHeading' onClick={this.props.showIngredients}>{this.props.name}</div>
                <div className='delete' onClick={this.props.onDelete}><i className='fa fa-trash-o'></i></div>
                <i className={'fa fa-chevron-down view' + this.props.name} onClick={this.props.showIngredients}></i>
                <div className={'itemIngredients ' + this.props.name}>
                    <ul className='hide'>
                        {this.getIngredients()}
                    </ul>
                    <div className='hide editItem' onClick={this.props.onEdit}><i className='fa fa-cog editIcon'></i>Edit</div>
                </div>
            </div>
        );
    }
}

export default Item;