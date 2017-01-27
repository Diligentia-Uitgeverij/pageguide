# PageGuide

## installation
```
```

## usage
```
<head>
  <title>page title</title>
  <script src="/assets/pageguide.min.js"></script>
  <script>
    pageGuide = new PageGuide({
      "page title": [
        {
          "id": "html-element-id",
          "title": "PageGuide title",
          "position": "top", // top, top-left, top-right, right, right-top, right-bottom, bottom, bottom-left, bottom-right, left, left-top, left-bottom
          "content": "<p>You should provide valid HTML markup, <em>but whatever</em>.</p>"
        }
      ]
    });
  </script>
</head>
```

Each page you might need a pageguide for must have an unique title, as you should provide all information for the page as an object bound to the page title.

### alternative
```
<head>
  <title>page title</title>
  <script src="/assets/pageguide.min.js"></script>
  <script>
    pageGuide = new PageGuide('path/to/pageguide-data.json');
  </script>
</head>
```

You can put the guides in a single JSON as not to clutter a script-tag.