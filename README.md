# Middleman with Tailwind CSS (and on Heroku)

(thanks to [this guy's blog
post](https://www.randomerrata.com/articles/2017/middleman-on-heroku/) for the
Heroku setup)

- ruby 2.4.0
- middleman 4.2.1
- tailwind 0.2

This project has Middleman set up with webpack and
[Tailwind](https://tailwindcss.com/) (and postcss).

---

As per the aforementioned blog post regarding Heroku, if you’re using an
external asset pipeline that requires Node.js, you should add the Node.js
buildpack to your Heroku app.

```
heroku buildpacks:set heroku/ruby
heroku buildpacks:add heroku/nodejs --index 1
```
