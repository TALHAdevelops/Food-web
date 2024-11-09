import baconburger from '../assets/productphotos/baconburger.jpg'
import bbqburger from '../assets/productphotos/bbqburger.jpg'
import caesarsalad from '../assets/productphotos/caesarsalad.jpg'
import carbonara from '../assets/productphotos/carbonara.jpg'
import cheeseburger from '../assets/productphotos/cheeseburger.jpeg'
import pepperoni from '../assets/productphotos/pepperoni.jpg'
import supreme from '../assets/productphotos/supreme.jpg'
import veggieburger from '../assets/productphotos/veggieburger.jpg'

export const products = [
    {
        id: 1,
        productName: "Veggie",
        price: 10.99,
        productImage: veggieburger,
    },
    {
        id: 2,
        productName: "Bacon",
        price: 12.99,
        productImage: baconburger,
    },
    {
        id: 3,
        productName: "BBQ",
        price: 15.99,
        productImage: bbqburger,
    },
    {
        id: 4,
        productName: "Cheese burger",
        price: 20.99,
        productImage: cheeseburger,
    },
        {
          id: 5,
          productName: "Pepperoni",
          price: 32.99,
          productImage: pepperoni
        },
        {
        id: 6,
        productName: "Carbonara",
        price: 21.99,
        productImage: carbonara
        },
        {
          id: 7,
          productName: "Caesar Salad",
          price: 17.99,
          productImage: caesarsalad
        },
        {
          id: 8,
          productName: "Supreme",
          price: 35.99,
          productImage: supreme
        }
      
]
