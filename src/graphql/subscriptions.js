/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      location {
        id
        userID
        apt
        street
        city
        state
        zipcode
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          orderProduct {
            items {
              id
              orderID
              productID
              order {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      accountType
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      location {
        id
        userID
        apt
        street
        city
        state
        zipcode
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          orderProduct {
            items {
              id
              orderID
              productID
              order {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      accountType
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      location {
        id
        userID
        apt
        street
        city
        state
        zipcode
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      orders {
        items {
          id
          userID
          orderProduct {
            items {
              id
              orderID
              productID
              order {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      accountType
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      userID
      apt
      street
      city
      state
      zipcode
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      userID
      apt
      street
      city
      state
      zipcode
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      userID
      apt
      street
      city
      state
      zipcode
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userID
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userID
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userID
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating {
    onCreateRating {
      id
      userID
      productID
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating {
    onUpdateRating {
      id
      userID
      productID
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating {
    onDeleteRating {
      id
      userID
      productID
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      rating
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      imageUrl
      description
      price
      categoryID
      category {
        id
        name
        createdAt
        updatedAt
      }
      sellerID
      seller {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      types {
        items {
          id
          productID
          name
          imageURL
          price
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      deals
      quantity
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      imageUrl
      description
      price
      categoryID
      category {
        id
        name
        createdAt
        updatedAt
      }
      sellerID
      seller {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      types {
        items {
          id
          productID
          name
          imageURL
          price
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      deals
      quantity
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      imageUrl
      description
      price
      categoryID
      category {
        id
        name
        createdAt
        updatedAt
      }
      sellerID
      seller {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      types {
        items {
          id
          productID
          name
          imageURL
          price
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      ratings {
        items {
          id
          userID
          productID
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          rating
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      deals
      quantity
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      orderProduct {
        items {
          id
          orderID
          productID
          order {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
      id
      productID
      name
      imageURL
      price
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
      id
      productID
      name
      imageURL
      price
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
      id
      productID
      name
      imageURL
      price
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      cartID
      productID
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      cartID
      productID
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      cartID
      productID
      cart {
        id
        userID
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
      id
      orderID
      productID
      order {
        id
        userID
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
      id
      orderID
      productID
      order {
        id
        userID
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
      id
      orderID
      productID
      order {
        id
        userID
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        user {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      product {
        id
        name
        imageUrl
        description
        price
        categoryID
        category {
          id
          name
          createdAt
          updatedAt
        }
        sellerID
        seller {
          id
          name
          location {
            id
            userID
            apt
            street
            city
            state
            zipcode
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          orders {
            items {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          ratings {
            items {
              id
              userID
              productID
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              rating
              description
              createdAt
              updatedAt
            }
            nextToken
          }
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          accountType
          createdAt
          updatedAt
        }
        types {
          items {
            id
            productID
            name
            imageURL
            price
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        deals
        quantity
        cartProduct {
          items {
            id
            cartID
            productID
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        orderProduct {
          items {
            id
            orderID
            productID
            order {
              id
              userID
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            quantity
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
      id
      userID
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
      id
      userID
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
      id
      userID
      cartProduct {
        items {
          id
          cartID
          productID
          cart {
            id
            userID
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          product {
            id
            name
            imageUrl
            description
            price
            categoryID
            category {
              id
              name
              createdAt
              updatedAt
            }
            sellerID
            seller {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            types {
              items {
                id
                productID
                name
                imageURL
                price
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            deals
            quantity
            cartProduct {
              items {
                id
                cartID
                productID
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      user {
        id
        name
        location {
          id
          userID
          apt
          street
          city
          state
          zipcode
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        orders {
          items {
            id
            userID
            orderProduct {
              items {
                id
                orderID
                productID
                order {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                quantity
                createdAt
                updatedAt
              }
              nextToken
            }
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        ratings {
          items {
            id
            userID
            productID
            user {
              id
              name
              location {
                id
                userID
                apt
                street
                city
                state
                zipcode
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              orders {
                items {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              accountType
              createdAt
              updatedAt
            }
            product {
              id
              name
              imageUrl
              description
              price
              categoryID
              category {
                id
                name
                createdAt
                updatedAt
              }
              sellerID
              seller {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              types {
                items {
                  id
                  productID
                  name
                  imageURL
                  price
                  createdAt
                  updatedAt
                }
                nextToken
              }
              ratings {
                items {
                  id
                  userID
                  productID
                  rating
                  description
                  createdAt
                  updatedAt
                }
                nextToken
              }
              deals
              quantity
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              orderProduct {
                items {
                  id
                  orderID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            rating
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        cart {
          id
          userID
          cartProduct {
            items {
              id
              cartID
              productID
              cart {
                id
                userID
                cartProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              product {
                id
                name
                imageUrl
                description
                price
                categoryID
                category {
                  id
                  name
                  createdAt
                  updatedAt
                }
                sellerID
                seller {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                types {
                  nextToken
                }
                ratings {
                  nextToken
                }
                deals
                quantity
                cartProduct {
                  nextToken
                }
                orderProduct {
                  nextToken
                }
                createdAt
                updatedAt
              }
              quantity
              createdAt
              updatedAt
            }
            nextToken
          }
          user {
            id
            name
            location {
              id
              userID
              apt
              street
              city
              state
              zipcode
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            orders {
              items {
                id
                userID
                orderProduct {
                  nextToken
                }
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            ratings {
              items {
                id
                userID
                productID
                user {
                  id
                  name
                  accountType
                  createdAt
                  updatedAt
                }
                product {
                  id
                  name
                  imageUrl
                  description
                  price
                  categoryID
                  sellerID
                  deals
                  quantity
                  createdAt
                  updatedAt
                }
                rating
                description
                createdAt
                updatedAt
              }
              nextToken
            }
            cart {
              id
              userID
              cartProduct {
                items {
                  id
                  cartID
                  productID
                  quantity
                  createdAt
                  updatedAt
                }
                nextToken
              }
              user {
                id
                name
                location {
                  id
                  userID
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  nextToken
                }
                ratings {
                  nextToken
                }
                cart {
                  id
                  userID
                  createdAt
                  updatedAt
                }
                accountType
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            accountType
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        accountType
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
