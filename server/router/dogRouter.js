var express = require('express');
var router = express.Router();
var fs = require('fs');

var breeds = [
  {name: "Labrador Retrievers", description: "The gentle, intelligent and family-friendly Labrador Retriever from Canada continues to be the most popular breed in the United States, according to AKC registration statistics. This versatile hunting breed comes in three colors - yellow, black and chocolate - and because of their desire to please their master they excel as guide dogs for the blind, as part of search-and-rescue teams or in narcotics detection with law enforcement.", hypoallergenic: "No", lifespan: "10-12 years"},
  {name: "German Shepherds", description: "The first impression of a good German Shepherd Dog is that of a strong, agile, well muscled animal, alert and full of life. It is well balanced, with harmonious development of the forequarter and hindquarter. The dog is longer than tall, deep-bodied, and presents an outline of smooth curves rather than angles. It looks substantial and not spindly, giving the impression, both at rest and in motion, of muscular fitness and nimbleness without any look of clumsiness or soft living. The ideal dog is stamped with a look of quality and nobility - difficult to define, but unmistakable when present. Secondary sex characteristics are strongly marked, and every animal gives a definite impression of masculinity or femininity, according to its sex.", hypoallergenic: "No", lifespan: "9-13 years"},
  {name: "Golden Retrievers", description: "A symmetrical, powerful, active dog, sound and well put together, not clumsy nor long in the leg, displaying a kindly expression and possessing a personality that is eager, alert and self-confident. Primarily a hunting dog, he should be shown in hard working condition. Overall appearance, balance, gait and purpose to be given more emphasis than any of his component parts. Faults-Any departure from the described ideal shall be considered faulty to the degree to which it interferes with the breed's purpose or is contrary to breed character.", hypoallergenic: "No", lifespan: "10-12 years"},
  {name: "Bulldogs", description: "Something", hypoallergenic: "No", lifespan: "8-10 years"},
  {name: "Beagles", description: "Something", hypoallergenic: "No", lifespan: "12-15 years"},
  {name: "French Bulldogs", description: "Something", hypoallergenic: "No", lifespan: "10-12 years"},
  {name: "Yorkshire Terriers", description: "Something", hypoallergenic: "Yes", lifespan: "13-16 years"},
  {name: "Poodles", description: "Something", hypoallergenic: "Yes", lifespan: "12-15 years"},
  {name: "Rottweilers", description: "Something", hypoallergenic: "No", lifespan: "8-10 years"},
  {name: "Boxers", description: "Something", hypoallergenic: "No", lifespan: "10-12 years"}
];


router.get('/', function(request, response) {
  response.send(breeds);
});


module.exports = router;