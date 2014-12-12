Secret
======

Unofficial API for Secret.

*Note: This is an unofficial API and __not__ supported or controlled by Secret itself. Any questions, comments, feedback or feature requests should be directed to [karan](http://github.com/xasos) or via an [issue](https://github.com/xasos/Secret/issues) in this repo.*

**NOTICE**: Not complete, under active development.

Usage
=====

**Base URL:** [https://secret-api.herokuapp.com/](https://secret-api.herokuapp.com/)

**Output:** JSON

### Get today's popular secrets

Get popular secrets shared today. Optional ID parameter.

#### `GET /popular/:id`

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
      "comment_html": "\n          \n          Yo guys. I have been toying with a scraper for PH for some time now, and was really motivated after seeing <a href=\"https://twitter.com/TosinAF\">@TosinAF</a> 's <a href=\"http://www.producthunt.com/posts/the-news-ios\">thread</a> and packaged all I had in a neat API.<br><br><a href=\"http://hook-api.herokuapp.com/today\">Try it here</a><br><br>Currently it gets today's posts, and has a cache of 1 hour. I hope to see people make a ton of good stuff with it. :)<br><br>PS: I make a lot of cool stuff, and people love it. <a href=\"http://www.goel.im/#subscribe\">Leave your e-mail here</a> and stay tuned about my projects.\n        ",
      "comment": "\n          \n          Yo guys. I have been toying with a scraper for PH for some time now, and was really motivated after seeing @TosinAF 's thread and packaged all I had in a neat API.Try it hereCurrently it gets today's posts, and has a cache of 1 hour. I hope to see people make a ton of good stuff with it. :)PS: I make a lot of cool stuff, and people love it. Leave your e-mail here and stay tuned about my projects.\n        ",
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
