//Lets try to understand Lexical Scoping with this example

const humus=function(factor){
      const ingredient=function(amount, unit, name){
            let ingredientAmount=amount*factor;//Here, ingredient function can use the binding of outer function humus
            if(ingredientAmount>1){
                  unit+="s";
            }
            console.log(`${ingredientAmount} ${unit} ${name}`);
      };

      ingredient(1, "can", "chickpeas");
      ingredient(0.25, "cup", "tahini");
      ingredient(0.25, "cup", "lemon juice");
      ingredient(1, "clove", "garlic");
      ingredient(2, "tablespoon", "olive oil");
      ingredient(0.5, "teaspoon", "cumin");
}

humus(1);

//Lexical Scoping
/*
      For nested functions, the inner function can use the bindings of outer function but outer function cannot use the bindings of inner function
*/