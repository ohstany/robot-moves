## Save a robot from explosion on EMP mine.

There is a robot which can move around on a grid. The robot is placed at point (0,0). From (x, y) the robot can move to (x+1,
y), (x-1, y), (x, y+1), and (x, y-1). Some points are dangerous and contain EMP Mines. To know which points are safe, we check
whether the sum digits of abs(x) plus the sum of the digits of abs(y) are less than or equal to 23. For example, the point (59, 75) is not safe because 5 + 9 + 7 + 5 = 26, which is greater than 23. The point (-51, -7) is safe because 5 + 1 + 7 = 13, which is
less than 23.

**_How large is the area that the robot can access?_**

## Solution Steps

- Representing a graph using a 2D array implementing the x-axis & y-axis grid surface.
- In order to find each axis(x,y) length we'll be incrementing a variable digit(0 at start) by 1 point, on each increment will split the number into separate single digits and sum them abs(number) to a result that is less than or equal to 23. If result be more than 23 will break the loop.
- The robot simply visit the first quadrant only one by one point and moves on the surface only to the safe connected areas.
- In order to find which areas are safe and a robot can actually move to, let's iterate two dimensional loop and find the sum of abs(x) and abs(y), then compare that the result is less or equal to 23, if so than assign current point area to be safe with a green label.
- To see how safe areas(**green fields**) visually are look like (2D format), open in a browser `grid-view.htm`. Eventually we'll see a lot of triangle-like islands that are joined together. Those are safe areas for a robot to travel. Also, the areas marked as **red fields** are actually satisfying safe condition 23, but not connected with each other in 2D representation, what means that robot won't be able to travel to them. We'll ignore those fields and mark them to be a red label.
- For finding a relation and ignore safe fields that are not connected with each other, we'll be comparing 2 quadrants or 4 fields at each quadrant via simple linear operation -> the top leftmost field of A quadrant must have relation with one of a field from B quadrant, otherwise it will be ignored.
- In the end of a day we've complexity of O(1) without over-engineering it.

## Output #1: Run example to see Grid via GUI

Open file the browser to see grid surface.

-   **Green** areas are safe
-   **Red** areas are safe but not accessible by a robot
-   **Gray** areas are dangerous and contain EMP mines

    grid-view.htm

<img width="842" alt="Screen Shot 2021-01-12 at 7 53 31 PM" src="https://user-images.githubusercontent.com/44670054/104306412-411a9c00-5511-11eb-81b8-79249205fb1a.png">

## Output #2: Clone Source Code and Execute it in the Terminal

Script `robot.js` must be executed via node.js

    git clone https://github.com/ohstany/robot-moves.git

## Program Execution

    node robot.js
    or
    node robot.js --safe 20

Expected output

    > Surface area size: 1,954,404 points
    > Area size robot can access: 592,597 points

## Additional Controlled Arguments

In order to find out which areas are safe we need to provide one argument **safe** area range (default: 23).
On GUI html page you are able to set this value dynamically via an input field.

    -s|--s|--safe    # Set safe area range

    # Example
    node robot.js --s 23

## Requirements

You must install Node.js to be able to execute JavaScript files on Linux or Windows environments.
