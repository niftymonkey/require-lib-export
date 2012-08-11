## Synopsis

This is an attempt to work through the options for exporting a javascript library that uses [RequireJS][1].

## Intent

The goal of this experiment is to show how to do the following with your [RequireJS][1]-enabled library:
* Export your javascript library module.
* Ensure that none of your module dependencies leak out into global space.
* Show how to reduce or remove the knowledge of [RequireJS][1] for users of your library.

## Motivation

In the process of trying to build a modular and reusable component library, I understandably came to the conclusion that I would want to 
use an [AMD][2] script loader.  I chose [RequireJS][1] to do this for me.  However, I quickly realized that to do exactly what I want, 
I'd have to have a better understanding of how the loader did its thing.


[1]: http://requirejs.org/
[2]: https://github.com/amdjs/amdjs-api/wiki/AMD