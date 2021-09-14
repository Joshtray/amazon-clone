/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      location {
        id
        apt
        street
        city
        state
        zipcode
        createdAt
        updatedAt
      }
      orders {
        id
        name
        imageUrl
        description
        price
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
        apt
        street
        city
        state
        zipcode
        createdAt
        updatedAt
      }
      orders {
        id
        name
        imageUrl
        description
        price
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
        apt
        street
        city
        state
        zipcode
        createdAt
        updatedAt
      }
      orders {
        id
        name
        imageUrl
        description
        price
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
      apt
      street
      city
      state
      zipcode
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      apt
      street
      city
      state
      zipcode
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      apt
      street
      city
      state
      zipcode
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
      category {
        id
        name
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
            category {
              id
              name
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
      category {
        id
        name
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
            category {
              id
              name
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
      category {
        id
        name
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
            category {
              id
              name
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            category {
              id
              name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
      }
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
      }
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        user {
          id
          name
          location {
            id
            apt
            street
            city
            state
            zipcode
            createdAt
            updatedAt
          }
          orders {
            id
            name
            imageUrl
            description
            price
            category {
              id
              name
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
            createdAt
            updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
        category {
          id
          name
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
              category {
                id
                name
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
              category {
                id
                name
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
        createdAt
        updatedAt
      }
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
            user {
              id
              name
              location {
                id
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
            category {
              id
              name
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
            createdAt
            updatedAt
          }
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
          apt
          street
          city
          state
          zipcode
          createdAt
          updatedAt
        }
        orders {
          id
          name
          imageUrl
          description
          price
          category {
            id
            name
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
                category {
                  id
                  name
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
                category {
                  id
                  name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
                apt
                street
                city
                state
                zipcode
                createdAt
                updatedAt
              }
              orders {
                id
                name
                imageUrl
                description
                price
                category {
                  id
                  name
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
                createdAt
                updatedAt
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
              category {
                id
                name
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
                category {
                  id
                  name
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
                createdAt
                updatedAt
              }
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
              apt
              street
              city
              state
              zipcode
              createdAt
              updatedAt
            }
            orders {
              id
              name
              imageUrl
              description
              price
              category {
                id
                name
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
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
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
                  apt
                  street
                  city
                  state
                  zipcode
                  createdAt
                  updatedAt
                }
                orders {
                  id
                  name
                  imageUrl
                  description
                  price
                  deals
                  quantity
                  createdAt
                  updatedAt
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
