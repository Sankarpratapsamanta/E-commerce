import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[{
                title:'HATS',
                imageUrl:'https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
                id:1
            },
            {
                title:'JACKETS',
                imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2
            },
            {
                title:'SNEAKERS',
                imageUrl:'https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200',
                id:3
            },
            {
                title:'WOMENS',
                imageUrl:'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
                size:'large',
                id:4
            },
            {
                title:'MENS',
                imageUrl:'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300',
                size:'large',
                id:5
            }]
        }

    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size}) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            
            </div>
        )
    }
}

export default Directory;