# OpenJungTypes
An implementation in Javascript of the Open Extended Jung Type Scales


# Goals
Utilize the Open Extended Jungian Type Scales dataset to create a Meyers-Briggs-like testing method via JS/React/Node

Develop an API to serve the dataset

# Methodology

- Conversion: Extract question dataset from inline script (strings are loaded in a header script in a var called "itempool") and format as JSON
    
- Selection:  Select 60 questions on start (randomly?  we might need to see what criteria the inline script uses to ensure proper balancing)
    
- Algorithms:  Grading algos are in http://openpsychometrics.org/tests/OEJTS/development/
    
- Stretch:  Allow choice between full (60 question) or Brief (shortened test using smaller dataset, see                   http://openpsychometrics.org/tests/OEJTS/development/
    
   Allow choice of how many questions are on screen (5, 10, 25, ALL)
    
   Expand JSON to include connections between the questions and their indicators using https://blog.kumu.io/how-to-build-a-blueprint-1f05ad93e5d5 to render a visual map of the question matrix
    
    


# Resources

Styling:

https://go.lambdaschool.com/brand/styleguide

Testing Method:

https://openpsychometrics.org/tests/OEJTS/
http://openpsychometrics.org/tests/OEJTS/development/

Question Datasets:

https://openpsychometrics.org/tests/OEJTS/1.php
https://openpsychometrics.org/tests/OEJTS/2.php



