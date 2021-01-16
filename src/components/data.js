//some fake data, later will be a real API!
const carObjects = [
    {
      "name":"blizzard",
      "price":"+300,000",
      "features":[
        {"condition":"new"},
        {"steering":"fwd"},
      ]
    },
    {
      "name":"blizzard1",
      "price":"+300,000",
      "features":[
        {"condition":"used"},
        {"steering":"rwd"},
      ]
    },
    {
      "name":"blizzard2",
      "price":"+300,000",
      "features":[
        {"condition":"new"},
        {"steering":"awd"},
      ]
    }
  ]
   //this is a string array for easy feature name reference
   export let featureNames = [];
   //features list is dynamic. Start with empty array
   export let featureList = [
   ];
   //lets populate featureList array
   carObjects.forEach(item=>{
       item.features.forEach(feature=>{
       //Item.features is an array of objects.
       //instead of iterating every car item to see if
       // a feature exists already or not, we make an array of strings with
       //all feature names listed.
           for (const [key,value] of Object.entries(feature)){
               //if the key doesnt exist in the string list
               if(!featureNames.includes(key)){
                   //we add it to the list
                    featureNames.push(key);
                    //then we push that feature to our featureList array
                    //where in the future we can add entries (features).
                    featureList.push({name:key,entries:[value]})
               }
               //if the feature already exists, we need to check the entries
               //array and see if there are new entries for that feature type.
               else{
                   featureList.forEach(existingFeature=>{
                       //map the featureList object array,
                       //if the name is equal to our key,
                       if(existingFeature.name === key){
                           //and isn't already apart of the entries array, add it!
                           if(!existingFeature.entries.includes(value)){
                               existingFeature.entries.push(value);
                           }
                       }
                   })
               }
           }
       })
   })