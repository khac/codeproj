import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Body = (
    <Typography variant="body2">
    Understanding Sudoku Rules:
    Before diving into the implementation, let's quickly recap the rules of Sudoku:
    <ul>
        <li>
            1. The grid consists of a 9x9 square divided into 3x3 sub-grids (also known as boxes).
        </li>
        <li>
            2. Each cell should be filled with a digit from 1 to 9.
        </li>
        <li>
            3. Each digit can only appear once in each row, column, and box.
        </li>
        <li>
            4. The puzzle starts with some pre-filled cells, creating a partially completed board.
        </li>
        <li>
            5. The goal is to fill in the remaining cells, ensuring that every row, column, and box contains all digits from 1 to 9 without repetition.
        </li>
    </ul>
    
    Generating a Sudoku Board:
    To generate a Sudoku board, we'll use a backtracking algorithm that ensures a valid and solvable puzzle. Here's a simplified outline of the algorithm:

    <ul>
        <li>
            1. Start with an empty 9x9 grid.
        </li>
        <li>
            2. Begin by selecting an empty cell.
        </li>
        <li>
            3. Generate a random number from 1 to 9 and check if it satisfies the Sudoku rules for that cell (i.e., not already present in the same row, column, or box).
        </li>
        <li>
            4. If the number is valid, place it in the cell and move to the next empty cell.
        </li>
        <li>
            5. If the number is invalid or leads to an unsolvable puzzle, backtrack to the previous cell and try a different number.
        </li>
        <li>
            6. Repeat steps 3 to 5 until the entire grid is filled.
        </li>
    </ul>
    
    Conclusion:
    With the power of Python and the `pygame` library, we can generate Sudoku boards and create an enjoyable Sudoku game. By implementing the backtracking algorithm for generating puzzles and integrating user interaction through a graphical interface, players can experience the challenge and satisfaction of solving Sudoku puzzles on their computer.
    Building a playable Sudoku game not only allows users to sharpen their logical thinking skills but also provides entertainment and relaxation. So, get ready to dive into the world of Sudoku and start cracking those number puzzles with Python! Happy gaming!

    </Typography>
);

export default function BasicCard() {
    const [learnMore, setLearnMore] = React.useState(false);
    return (
        <Card style={{ margin: '20px auto', padding:'10px 0', width: '80%' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
            </Typography>
            <Typography variant="h5" component="div">
                Building a Playable Sudoku Game in Python: Generating Sudoku Boards and Enjoying Puzzle Challenges
                
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Sudoku is a popular puzzle game that challenges players to fill a 9x9 grid with digits from 1 to 9, following specific rules. In this article, we'll explore how to generate a Sudoku board using Python and build a playable game that allows users to enjoy the puzzle-solving experience. Get ready to exercise your logical thinking and have fun with Sudoku!
                <br />
                
            </Typography>
            {learnMore && Body}
        </CardContent>
        <CardActions>
            <Button onClick={() => {setLearnMore(!learnMore)}} size="small">
                {!learnMore && 'Learn More'}
                {learnMore && 'Hide'}
            </Button>
        </CardActions>
        </Card>
    );
}