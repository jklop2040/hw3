function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  levelOfService = ['Noober X', 'Noober Purple', 'Noober XL', 'Noober Pool']
  if (ride.length > 1 || ride [0].numberOfPassengers == 1) {
  levelOfService = 'Noober Pool'
  } else if (ride.purplerequested= true ) {
  levelOfService = 'Noober Purple'
  } else if (ride.numberOfPassengers > 3) {
  levelOfService = 'Noober XL'
  } else {levelOfService = 'Noober X'}

  let passenger1 = ride[0]
  let passenger2 = ride[1]
  let passenger3 = ride[2]
  

  if (ride.length == 1) {
    passenger1Name = passenger1.passengerDetails.first+ ' ' +passengerDetails.last
    passenger1Phone = passenger1.passengerDetails.phoneNumber
    passenger1NumberOfPassengers = passenger1.passengerDetails.numberOfPassengers
    passenger1PickupAddressLine1 = passenger1.pickuplocation.address
    passenger1PickupAddressLine2 = passenger1.pickuplocation.city + ' ' + passenger1.pickuplocation.state + ' ' + passenger1.pickuplocation.zip
    passenger1DropoffAddressLine1 = passenger1.dropofflocation.address
    passenger1DropoffAddressLine2 = passenger1.dropoffLocation.city + ' ' + passenger1.dropoffLocation.state + ' ' + passenger1.dropoffLocation.zip
  }

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}