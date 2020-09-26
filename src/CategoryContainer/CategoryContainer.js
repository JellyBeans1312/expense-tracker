import React from 'react';
import { Category } from '../Category/Category'

export const CategoryContainer = ({ categories }) => {
  const category = categories.map(category => {
    return <Category title={category.title} color={category.color} icon={category.icon} key={category.id} />
  })
  return category
}