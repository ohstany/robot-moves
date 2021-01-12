## Save a robot from explosion on EMP mine.

There is a robot which can move around on a grid. The robot is placed at point (0,0). From (x, y) the robot can move to (x+1,
y), (x-1, y), (x, y+1), and (x, y-1). Some points are dangerous and contain EMP Mines. To know which points are safe, we check
whether the sum digits of abs(x) plus the sum of the digits of abs(y) are less than or equal to 23. For example, the point (59, 75) is not safe because 5 + 9 + 7 + 5 = 26, which is greater than 23. The point (-51, -7) is safe because 5 + 1 + 7 = 13, which is
less than 23.

**_How large is the area that the robot can access?_**

## Solution Steps

-   Representing a graph using a 2D array implementing the x-axis & y-axis grid surface.
-   Each axis length we'll find by incrementing a variable digit, on each increment step splitting it to single digits and sum them abs(number) to a result that is less than or equal to 23.
-   Robot simply visit first quadrant only one by one point and moves on the surface only to the safe connected areas.
-   In order to find out which areas are safe and robot can actually move to, let's iterrate two dimentional loop and find that sum of abs(x) and abs(y) is less than 23, and then assign safe label to the area.
-   Please open `grid-view.htm` to see how safe areas(**green fields**) are look like in a 2D grid format. Eventually we'll see a lot of triangled islands that are joined together. That are safe areas for robot to travel. Also, there will be the areas (marked as **red fields**) which are satisfy our condition 23 but not connected with each other, which means that robot won't be able to travel to them. We'll ignore those fields from count and mark them as a red label.
-   To ingore safe fields that are not connected with each other we'll be comparing 4 quadratic fields via simple linear operation - the rightmost bottom field must have connection relationship with the leftmost or the top rightmost field, otherwise it will be ignored.
-   In the end of a day we've complexity of O(1) without over-engineering it.

## Output #1: Run example to see Grid via GUI

Open file the browser to see grid surface.

-   **Green** areas are safe
-   **Red** areas are safe but not accessible by robot
-   **Gray** areas is dangerous and contain EMP mines

    grid-view.htm
    
<img width="842" alt="Screen Shot 2021-01-12 at 7 53 31 PM" src="https://user-images.githubusercontent.com/44670054/104306412-411a9c00-5511-11eb-81b8-79249205fb1a.png">


## Output #2: Clone Source Code and Execute in the Terminal

Script must be executed via node.js

    git clone https://github.com/ohstany/robot-moves.git

## Program Execution

    node robot.js
    or
    node robot.js --safe 20

Expected output

    > Surface area size: 1,954,404 points
    > Area size robot can access: 595,392 points

## Additional Controlled Arguments

In order to find out which area is safe we need to provide one argument **safe** area range (default: 23).
On GUI html page you are able to set this value dynamically via input field.

    -s|--s|--safe    # Set safe area range

    # Example
    node robot.js --s 23

## Requirements

You must install Node.js to be able to execute JavaScript files on Linux or Windows environments.
