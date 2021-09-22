/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apt
        street
        city
        state
        zipcode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        rating
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const productByCategory = /* GraphQL */ `
  query ProductByCategory(
    $categoryID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
) {
    productByCategory(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      ) {
      items {
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
      nextToken
    }
  }
`;

export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
                cartProduct {
                  nextToken
                }
                user {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($userID: ID!) {
    getCart(userID: $userID) {
      id
      userID
      cartProduct {
        items {
          id
          cartID
          productID
          quantity
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $userID: ID
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarts(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
