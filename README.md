Secret
======

Unofficial API for Secret.

*Note: This is an unofficial API and is __not__ supported or controlled by Secret itself. Any questions, comments, feedback or feature requests should be directed to [xasos](http://github.com/xasos) or via an [issue](https://github.com/xasos/Secret/issues) in this repo.*

**Update 12/18/2014:** Secret has changed business models and removed the functionality to view Secrets on the web. This API is now deprecated.

**NOTICE**: Not complete, under active development.

Usage
=====

**Base URL:** [https://secret-api.herokuapp.com/](https://secret-api.herokuapp.com/)

**Output:** JSON

### Get today's popular secrets

Get popular secrets shared today in a certain category. Available categories include Popular, Money, Travel, College, Tinder, Weddings, Support, Food, Emoji, and Funny.

#### `GET /secrets/:category`

Example Query:

```
http://hook-api.herokuapp.com/secrets/popular
```

Response:

```json
{
  "status": "success",
  "secrets": [
    {
      "url": "http://secret.ly",
      "permalink": "/p/9sdf03ja001jdm1d980aj",
      "comments": 150,
      "secret": "I stole a tater tot from the table next to me.",
      "image": "http://secret.ly/p/asp00q23jmsa.jpg",
      "hearts": 466
    },
    ...
    ...
```

### Get comments for any post

Get comments in plain text and HTML format for a post.

#### `GET /:permalink`

Example Query:

```
http://hook-api.herokuapp.com/p/9sdf03ja001jdm1d980aj
```

Response:

```json

{
  "status": "success",
  "post": {
    "url": "http://secret.ly/",
    "permalink": "/p/9sdf03ja001jdm1d980aj",
    "comment_count": "150",
    "secret": "I stole a tater tot from the table next to me.",
    "image": "http://secret.ly/p/asp00q23jmsa.jpg",
    "hearts": 466
  },
  "comments": [
    {
      "comment_html": "",
      "comment": "",
      "user": "red-heart",
      "index": 1
    },
    ...
    ...
```

Start
=====

```bash
$ npm install            # install dependencies
$ node app               # start the server
```

Deploy to Heroku
=====

```bash
$ npm install            # install dependencies
$ heroku create
$ (git add, git commit)
$ git push heroku master
```

## License
[MIT License](LICENSE)
