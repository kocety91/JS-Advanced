

function myFunc(obj) {
    
if (obj.dizziness == true ){
   obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
   obj.dizziness = false;
}

return obj;

}

console.log(myFunc({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  ));