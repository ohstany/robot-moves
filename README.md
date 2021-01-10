## Save a robot from explosion on EMP mine.

There is a robot which can move around on a grid. The robot is placed at point (0,0). From (x, y) the robot can move to (x+1,
y), (x-1, y), (x, y+1), and (x, y-1). Some points are dangerous and contain EMP Mines. To know which points are safe, we check
whether the sum digits of abs(x) plus the sum of the digits of abs(y) are less than or equal to 23. For example, the point (59, 75) is not safe because 5 + 9 + 7 + 5 = 26, which is greater than 23. The point (-51, -7) is safe because 5 + 1 + 7 = 13, which is
less than 23.

**_How large is the area that the robot can access?_**

## Solution Steps

-   Representing a graph using a 2D array implementing the x-axis & y-axis surface. Axis length is set to 1000 by default since we want to have axis range -100...100, or axis range \* 2 = 1000.
-   We are simply visiting first quadrant only one by one point.
-   While iterrating 2D loop we're accessing each point checking whether current position is safe or not.
-   As and when we find a new safe coordinate to move to, increment the counter(safeArea).
-   In the end of a day we've complexity of O(1) without over-engineering it.

## Clone Source Code

    git clone https://github.com/ohstany/robot-moves.git

## Program Execution

    node robot.js

Expected output

    > Surface area size: 4,008,004 points
    > Area size robot can access: 1,261,676 points

## Additional Controlled Arguments

In order to find out which area is safe we need to provide a few arguments, **axis** area langth (default: 1000) and **safe** area range (default: 23).

    -a|--a|--axis    # Set surface area axis length
    -s|--s|--safe    # Set safe area range

    # Example
    node robot.js --area 1000 --safe 23

## Requirements

You must install Node.js to be able to execute JavaScript files on Linux or Windows environments.
