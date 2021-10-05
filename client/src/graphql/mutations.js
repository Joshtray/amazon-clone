/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
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
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
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
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
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
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
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
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
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
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
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
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
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
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
