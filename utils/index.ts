import type { ICart } from '@/interfaces'

export const addToCart = (toAddProduct: ICart, Products: ICart[]) => {
  const exists = Products.some((item) => item.id === toAddProduct.id)

  if (exists) {
    return Products.map((item) =>
      item.id === toAddProduct.id
        ? { ...item, qty: (item.qty ?? 0) + 1 }
        : item,
    )
  }

  return [...Products, { ...toAddProduct, qty: 1 }]
}


export const trimText = (text:string)=>{
  if(text.length>30){
    return `${text.slice(0, 31)}...`
  }
  return text
}

