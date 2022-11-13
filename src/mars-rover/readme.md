## Your Task

<p>You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet.<br>
Develop an API that translates the commands sent from earth to instructions that are understood by the rover.</p>

## Requirements

-   [ ] You are given the initial starting position (0,0) of a rover and the direction (N) it is facing.
-   [ ] The rover receives a character array of commands. -> `(F,F,L,F,R,B,B,L,...)`
    -   [ ] Implement commands that move the rover forward/backward `(F,B).`
    -   [ ] Implement commands that turn the rover left/right `(L,R).`
-   [ ] Implement obstacle detection before each move to a new position. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.
        Rules

## Rules

-   Hardcore TDD. No Excuses!
-   Change roles (driver, navigator) after each TDD cycle.
    No refactoring while in red phases.
-   4 rules of simple design
    -   passing the test
    -   Reveal intent
    -   No duplication
    -   Least amount of elements
