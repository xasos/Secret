Secret
======

Unofficial API for Secret.

Usage
=====

**Base URL:** [http://hook-api.herokuapp.com/](http://hook-api.herokuapp.com/)

**Output:** JSON

### Get today's products

Posts are cached for 60 minutes.

#### `GET /today`

Example Query:

```
http://hook-api.herokuapp.com/today
```

Response:

```json
{
  "status": "success",
  "hunts": [
    {
      "url": "http://bit.ly/1oShrzl",
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
