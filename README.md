# Noir Brewing Co

Noir Brewing Co. website offers a digital platform for exploring and purchasing premium coffee beans, brewing equipment, and local on-site menu. Emphasizing minimalist design with earthy tones, the website provides a seamless, engaging user experience, facilitating easy navigation through its coffee offerings, subscription service, and more. Ideal for those looking to elevate their coffee experience, Noir Brewing Co. bridges the gap between coffee craftsmanship and online convenience.


## Deployment & Repo
Render: https://noirbrewingco.onrender.com

GitHub Repo: https://github.com/fullstackeli/noirbrewingco.git


## Installation

Please run 'npm install' to install dependencies.

    
## Usage

Please run "npm run dev".

## API Reference

Subscribe a User

```http
  POST /api/subscribe
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. email address of user to subscribe |
| `email` | `string` | **Required**. name of user subscribing |

#### Example Request

```http
  {
  "email": "user@example.com",
  "name": "John Doe"
}

```
#### Example Response

```http
{
  "status": "success",
  "message": "Thank you for subscribing!"
}


```
#### Error Response

```http
{
  "status": "error",
  "message": "Something went wrong. Please try again later."
}

```
#### Helper Function
```
sendEmail(email, name)
```
Takes an email and name and sends a subscription request to the API.

Parameters:
 - email (string): The user's email.
 - name (string): The user's name.
Returns:
 - A promise that resolves if the subscription is successful and rejects with an error message if something goes wrong.






## Tech Stack

**Front-End** HTML/CSS/JavaScript, React, Vite, Bootstrap

**Back-End:** Node, Express, MongoDB


## Acknowledgements

 - https://getbootstrap.com/
 - https://readme.so/editor
 - https://www.nodemailer.com/