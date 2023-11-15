import { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'
import { ProductsGrid } from "../components/ProductsGrid"
import { Search } from "../components/Search"

export const Store = () => {
  const [optionValue, setOptionValue] = useState('todos')
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const searchProducts = async () => {
    if (searchValue === '') return
    const { data, error } = await supabase.from('productos').select().ilike('nombre_del_producto', `%${searchValue}%`)
    setProducts(data)
    setIsLoading(false)
    console.log(searchValue)
  }
  const getProducts = async() => {
    if (optionValue === 'todos') {
      const {data, error} = await supabase.from('productos').select()
      setProducts(data)
      setIsLoading(false)
    }else{
      const { data, error } = await supabase.from('productos').select().eq('categoria',`${optionValue}`)
      setProducts(data)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    searchProducts()
  },[searchValue])

  useEffect(() => {

    getProducts()

  },[optionValue])

  return (
    <div className="content">
      <Search optionValue={optionValue} setOptionValue={setOptionValue} searchValue={searchValue} setSearchValue={setSearchValue} />
      <ProductsGrid products={products} isLoading={isLoading}/>
    </div>
  )
}


