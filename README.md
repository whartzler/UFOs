# UFOs

## Overview
Working with Dana we created am HTML webpage to provide an in depth analysis of UFO sightings where the user can filter the dataset based on criteria of their choosing.  Included headers, paragraphs and a filterable tableset that will filter the data set based on criteria the user inputs. 

## Results

The webpage is very easy and any new users will catch on quickly.  

### How to Search  
Once you open the webpage all the data will automatically show without any filters all will already by categorized by Date, City State etc... 

![image](https://user-images.githubusercontent.com/109490755/211231890-6b613403-0a02-4771-b0e1-c6c63a280007.png)

If the user wants to find specifc information from the dataset they can search the data using five possible filters on the left side of the webpage.

![image](https://user-images.githubusercontent.com/109490755/211231551-a06725ef-0508-4606-8c65-e68e2b0959ff.png)

The user can filter by one cateogry or by all 5 but the data will only populate if the data exactly matches the filters.  If the user includes a variable that is not in the dataset the table will show blank even if some of the other filters might match data in the dataset.   
(Ex. if the user inputs uk in the Enter a Country filter nothing will pupulate on the table)

Also the filters are case sensative, ff the user inputs US instead of us the table will not populate the data.
![image](https://user-images.githubusercontent.com/109490755/211232041-bd0fceab-1424-4a89-8421-3fb3e2f6c269.png)

## Summary
### Drawback of the webpage
As mentioned above the webpage is case sensative, we should include code to where the table will populate with case sensativity.  

### Recommendations
An addition to the webpage would be able to search and not have to worry about case sensitivity. Since a lot of Cities, States, and Countries are natually capitalized it is a little confusion to have them all lowercase.  This will greatly improve ease of searching the dataset as well.

Another addition we should make is have a dropdown for State's, Countries and Shapes with possible options to choose from.  As looking through this webpage you might not know exactly what city, state, country or shape youre looking for.  The dropdown would greatly help with the ease of searching.  


## Resources.
index.html - Webpage where you can interact with the dataset
app_challenge_code.js - Final JS code used to run the index.html webpage
data.js - JS dataset
