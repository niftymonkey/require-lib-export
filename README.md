## Synopsis

This is an attempt to work through the options for exporting a javascript library that uses [RequireJS][1].

## Intent

The intent is to be able to export a javascript library that will allow the user to use that library with minimal effort.

## Motivation

In the process of trying to build a modular and reusable component library, I understandably came to the conclusion that I would want to 
use an [AMD][2] script loader.  I chose [RequireJS][1] to do this for me.  However, I quickly realized that to do exactly what I want, 
I'd have to have a better understanding of how the loader did its thing.


[1]: http://requirejs.org/
[2]: https://github.com/amdjs/amdjs-api/wiki/AMD