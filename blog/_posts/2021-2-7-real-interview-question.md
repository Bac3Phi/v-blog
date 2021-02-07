---
title: Real Interview Questions
date: 2021-02-07
author: Bac3Fi
tags:
  - interview
---

## Question 1
Create an algorithm that prints the integers from 17 to 53. However for multiples of two print "Foo" instead of the
number and for the multiples of five print "Bar". For numbers which are multiples of both two and five print "FooBar".

::: details Answer
``` javascript
for(var i=17; i< 54; i++){
  if(i % 2 === 0 && i % 5 === 0){
  console.log("FooBar");
  } else if(i % 2 === 0){
  console.log("Foo");
  } else if(i % 5 === 0){
  console.log("Bar");
  } else {
  console.log(i);
  }
}
```
:::

## Question 2
In SQL database tables, why is redundant data (i.e. the same data stored in multiple tables)
generally a bad thing?
## Question 3
In Ruby on Rails, for what reasons might you initialise strings with single quotes ('xxx') instead of double quotes ("xxx")?
## Question 4
In development teams multiple people are often involved in building and maintaining applications, often including the
same set of files. They may be working on a single task together, or multiple tasks, and changes made by one developer
may conflict with those of another. What system would you suggest to help manage this, and why would you choose
your solution in particular?
## Question 5
Modern websites often need to take into account the form of device a visitor is viewing the site on (e.g. desktop
computer, tablet, smartphone). What design pattern would you suggest to make the site work across each device?
## Question 6
Explain what Object-oriented Programming is and the benefits of using an Object-oriented language.
## Question 7
In an ecommerce application, with discrete levels of stock, how would you manage a situation
where two customers were interested in buying the last unit of stock for an item? How would
your solution ensure the greatest possibility of the item being sold?
