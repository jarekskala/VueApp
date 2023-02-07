export const setRatingLevelClass = function(number) {
    let className;  

    switch (true) { 
        case number > 0 && number <= 3  :
            className = "rating-worse"; 
            break;
        case (number > 3 && number <= 7) :
            className = "rating-medium"; 
            break;
        case (number > 7) :
        className = "rating-best"; 
    }

    return className;  
} 
