import React from 'react';
import { Category } from '../Category/Category'

export const CategoryContainer = ({ categories, deleteCategory }) => {
  const category = categories.map(category => {
    return <Category title={category.title} color={category.color} icon={category.icon} id={category.id} key={category.id} deleteCategory={deleteCategory} />
  })
  return category
}