# elevator-challenge

### Bank
Manages all elevators, floors, and requests

### Floor
Floor of a building. After initialization, it's static.
Can make requests

### Elevator
Moving box that makes people lazy. 

> Previous art: [See stairs](https://en.wikipedia.org/wiki/Stairs)

### Request
Consists of a current floor and desired floor property.
Wanted to make it use Bluebird disposers, but I ran out of time...


## _Basically..._

A person can make a request from a floor. 
The floor sends it's location and the desired location of the person to the bank.
The bank then polls all elevators for a rating on their likelyhood to pick up a person based on work and timelyness
The bank determines the lowest rating, and assigns the elevator that request.

If the elevator is deemed unoperational after a trip, but has pending requests, they're re-issued to the bank with the new current floor
