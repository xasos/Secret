Secret
======

Unofficial API for Secret.

Usage
=====

**Base URL:** [https://secret-api.herokuapp.com/](https://secret-api.herokuapp.com/)

**Output:** JSON

### Get today's popular secrets

Posts are cached for 60 minutes.

#### `GET /popular`

Example Query:

```
http://hook-api.herokuapp.com/popular
```

Response:

```json
{
  "status": "success",
  "hunts": [
    {
      "url": "http://secret.ly/",
      "permalink": "/posts/the-news-ios",
      "comments": 20,
      "tagline": "Designer News + Hacker News, now on iOS",
      "rank": 2,
      "user": {
        "name": "Tosin Afolabi",
        "username": "TosinAF"
      },
      "votes": 48,
      "title": "The News (iOS)"
    },
    ...
    ...
```

## Credits

## License
[MIT License](LICENSE)
