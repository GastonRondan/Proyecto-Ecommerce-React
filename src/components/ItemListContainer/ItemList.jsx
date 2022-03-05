import React from 'react';
import { Item } from './Item'
import './ItemListContainer.css'

export const ItemList = ({items}) => {

    return (
      <div className='item-list'>
          {
              items.map( (item)=> <Item {...item} key={item.id} /> )
          }
      </div>
    )
}