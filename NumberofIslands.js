/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid === null || grid.length === 0)
      return 0;
    const isIsland = (row, col) => {
        if (row < 0 || col  < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0") {
            return 0;
        }
        else {
            grid[row][col] = "0";
            isIsland(row, col - 1);
            isIsland(row, col + 1);
            isIsland(row - 1, col);
            isIsland(row + 1, col);
            return 1;
        }
    }

    let islands = 0;
    for (let row=0; row < grid.length; row++) {
        for (let col=0; col < grid[row].length; col++) {
            if (grid[row][col] !== "0") {
                islands += isIsland(row, col);
            }
        }
    }
    return islands;
};


console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));